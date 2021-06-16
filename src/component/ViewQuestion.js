import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import ViewQAnswer from './ViewQAnswer';
import ViewQuestionDetail from './ViewQuestionDetail';

function ViewQuestion (props) {
   const { qid, isAnswer, isExist, isQuesstions } = props  

    if (isQuesstions && !isExist) {
        return <Redirect to="/404"/>
    }

    return (
        <div className="container">
            {isQuesstions
                ? isAnswer 
                    ? <ViewQuestionDetail qid={qid} />
                    : <ViewQAnswer qid={qid} />
                : <p>Loading...</p>}
        </div >
    )
}

function mapStateToProps({ authedUser, users, questions }, props ) {
    const qid = props.match.params.id;
    return {
        isAnswer: users[authedUser]?.answers[qid] === undefined,
        isQuesstions: Object.keys(questions).length,
        isExist: questions[qid],
        qid

    }
}

export default connect(mapStateToProps)(ViewQuestion);