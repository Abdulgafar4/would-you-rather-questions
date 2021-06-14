import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap';
import { connect } from 'react-redux';
import Question from './Question';

function Dashboard(props) {
    return (
        <Container className="dashboard">
            <Tabs>
                <Tab eventKey="unanswered" title='Unaswered'>
                    <Question list={props.unAnswered} />
                </Tab>
                <Tab eventKey="answered" title='Answered'>
                    <Question list={props.answered} />
                </Tab>
            </Tabs>
        </Container>
    )
}

function mapStateToProps({ users, authedUser, questions }) {
    const questionIds = Object.keys(questions);
    const sortedQuestionIds = questionIds.length
        ? questionIds
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        : [];

    const answered = users[authedUser] && questionIds.length
        ? Object.keys(users[authedUser].answers)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        : [];

    const unAnswered = sortedQuestionIds.filter(question => (
        !answered.includes(question)
    ));

    return {
        answered,
        unAnswered
  }
}

export default connect(mapStateToProps)(Dashboard);