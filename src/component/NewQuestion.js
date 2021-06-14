import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions';
import { Container } from 'react-bootstrap';

function NewQuestion(props) {

    const [optionOne, setOptionOne] = useState(''); 
    const [optionTwo, setOptionTwo] = useState(''); 

    const handleOptionOne = event => {
        setOptionOne(event.target.value);
    }

    const handleOptionTwo = event => {
        setOptionTwo(event.target.value);
    }

    const saveQuestion = () => {
        props.dispatch(handleSaveQuestion({
            author: props.authedUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo,
        }))
    }

    return (
        <Container className="card w-50  border-secondary">
        <form>
            <div className="text-center mb-3 bg-transparent">Create a new question</div>
                <div>Would you rather?</div>
                <input type="text" 
                 className="form-control mb-3"
                 placeholder="Option A Text"
                 value={optionOne}
                 onChange={handleOptionOne}
                />
                <span className="askquestion-container-or">OR</span>
                <input 
                 type="text" 
                 className="form-control mb-3" 
                 placeholder="Option B Text"
                 value={optionTwo}
                 onChange={handleOptionTwo}
                />
                <Link to="/" onClick={saveQuestion}>
                    <button className="btn btn-dark mb-3">Sumbit</button>
                </Link>
        </form>
        </Container>
    )
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}


export default connect(mapStateToProps)(NewQuestion)