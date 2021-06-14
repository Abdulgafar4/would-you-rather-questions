import { RECIEVE_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION:
            const { question, question: { id } } = action;
            return {
                ...state,
                [id]: {
                    ...question
                }
            }
        case SAVE_ANSWER:
            const { authedUser, qid, answer } = action.answer;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state;
    }
}