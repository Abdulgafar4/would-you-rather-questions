import { Card, ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';

function ViewQResult(props) {
    const {
        qAnswer,
        aText,
        answer,
        votes,
        totalVotes
    } = props;
    const isAnswer = qAnswer === answer;
    const percent = (votes / totalVotes * 100).toFixed(1);

    return (
        <Card
            bg={isAnswer ? "success" : "light"}
            text={isAnswer ? "white" : "dark"}
            className="poll-result">
            <Card.Body>
                {isAnswer
                    ? <span className="vote">Your Vote</span>
                    : null}
                <p>{`Would you rather ${aText}`}</p>
                <ProgressBar now={percent} label={`${percent}%`} />
                <span>{`${votes} out of ${totalVotes}`}</span>
            </Card.Body>
        </Card>
    )
}

function mapStateToProps({ users, questions, authedUser }, { paramsId, answer }) {
    const question = questions[paramsId];
    return {
        qAnswer: users[authedUser]?.answers[question?.id],
        aText: question ? question[answer].text : null,
        votes: question ? question[answer].votes.length : 0,
        totalVotes: question ? question.optionOne.votes.length + question.optionTwo.votes.length : 0
    }
}

export default connect(mapStateToProps)(ViewQResult);