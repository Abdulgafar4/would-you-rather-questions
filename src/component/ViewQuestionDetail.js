import { useState } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/questions';

function ViewQuestionDetail (props){

    const [ option, setOption ] = useState('')

    const handleOption = event => {
        setOption(event.target.id)
    }

    const saveAnswer = (e) => {
        e.preventDefault();
        const { authedUser, question, dispatch } = props
        dispatch(handleSaveAnswer({
            authedUser: authedUser,
            qid: question.id,
            answer: option
        }))
    }
    const { author, question } = props;

        return (
            <div className="card">
                <div className="card-header" as="h6">{author?.name} asks</div>
                <div className="card-body d-flex">
                    <div>
                        <img src={`${author?.avatarURL}`} width="100" height="100" alt={author?.name} />
                    </div>
                    <div className="pl-5">
                        <p>Would You Rather</p>
                        <form onSubmit={saveAnswer}>
                            <div className="form-check">
                                <input 
                                    type="radio" 
                                    id={"optionOne"} 
                                    name="answer" 
                                    value={question?.optionOne.text} 
                                    onClick={handleOption}
                                    className="form-check-input" />
                                <label 
                                    htmlFor={"optionOne"}
                                    className="form-check-label"
                                    >
                                    {question?.optionOne.text}
                                </label>
                            </div>
                            <div className="form-check mb-3">
                                <input 
                                    type="radio" 
                                    id={"optionTwo"} 
                                    name="answer" 
                                    value={question?.optionTwo.text} 
                                    onClick={handleOption}
                                    className="form-check-input" />
                                <label 
                                    htmlFor={"optionTwo"}
                                    className="form-check-label"
                                    >
                                    {question?.optionTwo.text}
                                </label>
                            </div>
                            <button 
                                type="submit" 
                                disabled={option === ''}
                                className="btn btn-dark">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

function mapStateToProps({ questions, users, authedUser }, { qid }) {
    const question = questions[qid];
    return {
        question: question,
        author: users[question?.author],
        authedUser
    }
}

export default connect(mapStateToProps)(ViewQuestionDetail);