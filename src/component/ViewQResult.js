import {  ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';

function ViewQResult(props) {
    const {
        qAnswer,
        aText,
        ans,
        aVotes,
        tVotes
    } = props;
    const isAnswer = qAnswer === ans;
    const percent = (aVotes / tVotes * 100).toFixed(1);

    return (
        <div
            bg={isAnswer ? "success" : "light"}
            text={isAnswer ? "white" : "dark"}
            className="card">
            <div className="card-body">
                {isAnswer
                    ? <span className="vote">Your Vote</span>
                    : null}
                <p>{`Would you rather ${aText}`}</p>
                <ProgressBar now={percent} label={`${percent}%`} />
                <span>{`${aVotes} out of ${tVotes}`}</span>
            </div>
        </div>
    )
}

function mapStateToProps({ users, questions, authedUser }, { qid, ans }) {
    const question = questions[qid];
    return {
        qAnswer: users[authedUser]?.answers[question?.id],
        aText: question ? question[ans].text : null,
        aVotes: question ? question[ans].votes.length : 0,
        tVotes: question ? question.optionOne.votes.length + question.optionTwo.votes.length : 0
    }
}

export default connect(mapStateToProps)(ViewQResult);