import { showLoading, hideLoading } from 'react-redux-loading';
import { getQuestions, saveQuestion, saveQuestionAnswer } from '../utils/api';

export const RECIEVE_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

function receiveQuestions(questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}

export function handleReceiveQuestions() {
    return (dispatch) => {
        dispatch(showLoading());
        return getQuestions()
            .then((questions) => dispatch(receiveQuestions(questions)))
            .then(() => dispatch(hideLoading()))
    }
}

function receiveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleSaveQuestion(question) {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestion(question)
            .then((question) => dispatch(receiveQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}

function receiveAnswer(answer) {
    return {
        type: SAVE_ANSWER,
        answer
    }
}

export function handleSaveAnswer(answer) {
    return (dispatch) => {
        dispatch(receiveAnswer(answer));
        return saveQuestionAnswer(answer);
    }
}