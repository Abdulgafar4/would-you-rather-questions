import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import ViewQAnswer from './ViewQAnswer';
import ViewQuestionDetail from './ViewQuestionDetail';

function ViewQuestion (props){
   const { paramsId, questions, users, authedUser } = props  

    if (Object.keys(questions).length && !questions[paramsId]) {
        return <Redirect to="/404" />
    }

    return (
        <Container>
            {Object.keys(questions).length
                ? users[authedUser]?.answers[paramsId] === undefined
                    ? <ViewQuestionDetail paramsId={paramsId} />
                    : <ViewQAnswer paramsId={paramsId} />
                : <p>Loading...</p>}
        </Container>
    )
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const paramsId = props.match.params.id;
    return {
        authedUser,
        questions,
        paramsId,
        users

    }
}

export default connect(mapStateToProps)(ViewQuestion);