import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'

function ViewQuestionDetail(props) {
    const  { question, author, authedUser } = props
    
    const [option, setOption] = useState('')

    const selectOption = (e) =>{
        setOption(e.target.id)
    }

    const saveAnswer = (e) => {
        e.preventDefault();
        props.dispatch(handleSaveAnswer({
            authedUser,
            question: question.id,
            answer: option

        }))
    }
   

    return (
        <Card>
        <Card.Header as="h6">{author?.name} asks</Card.Header>
        <Card.Body className="d-flex">
            <div>
                <img src={`${author?.avatarURL}`} width="100" height="100" alt={author?.name} />
            </div>
            <div className="pl-5">
                <p>Would You Rather</p>
                <form onSubmit={saveAnswer}>
                    <div className="form-check">
                        <input 
                            type="radio" 
                            id="optionOne" name="answer" 
                            value={question?.optionOne.text} 
                            onClick={selectOption}
                            className="form-check-input" />
                        <label 
                            htmlFor="optionOne"
                            className="form-check-label">
                            {question?.optionOne.text}
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input 
                            type="radio" 
                            id="optionTwo" name="answer" 
                            value={question?.optionTwo.text} 
                            onClick={selectOption}
                            className="form-check-input" />
                        <label 
                            htmlFor="optionTwo"
                            className="form-check-label">
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
        </Card.Body>
    </Card>
    )
}

function mapStateToProps({ users, authedUser, questions }, { paramsId }) {
    return {
        author: users[questions?.author],
        question: questions[paramsId],
        authedUser
    }
}

export default connect(mapStateToProps)(ViewQuestionDetail)
