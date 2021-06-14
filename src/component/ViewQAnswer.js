import React from 'react'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import ViewQResult from './ViewQResult';

function ViewQAnswer(props) {
    const { author, paramsId } = props;


    return (
        <Card>
            <Card.Header as="h6">Asked by {author?.name}</Card.Header>
            <Card.Body className="d-flex">
                <div>
                    <img src={`${author?.avatarURL}`} width="100" height="100" alt={author?.name} />
                </div>
                <div className="pl-4">
                    <p>Results:</p>
                    <div>
                        <ul>
                            <li className="mb-3">
                                <ViewQResult
                                    paramsId={paramsId}
                                    answer={props.optionOne} />
                            </li>
                            <li>
                                <ViewQResult
                                    paramsId={paramsId}
                                    answer={props.optionTwo} />
                            </li>
                        </ul>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

function mapStateToProps({ users, questions }, { paramsId }) {
    return {
        author: users[questions[paramsId]?.author]
    }
}

export default connect(mapStateToProps)(ViewQAnswer)
