import React from 'react'
import { connect } from 'react-redux';
import ViewQResult from './ViewQResult';

function ViewQAnswer(props) {
    const { author, qid } = props;


    return (
        <div className="card">
            <div className="card-header" as="h5">Asked by {author?.name}</div>
            <div className="card-body d-flex">
                <div>
                    <img src={`${author?.avatarURL}`} width="100" height="100" alt={author?.name} />
                </div>
                <div className="pl-4">
                    <p>Results:</p>
                    <div>
                        <ul>
                            <li className="mb-3">
                                <ViewQResult
                                    qid={qid}
                                    ans={"optionOne"} />
                            </li>
                            <li>
                                <ViewQResult
                                    qid={qid}
                                    ans={"optionTwo"} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({ users, questions }, { qid }) {
    const question = questions[qid]
    return {
        author: users[question?.author]
    }
}

export default connect(mapStateToProps)(ViewQAnswer)
