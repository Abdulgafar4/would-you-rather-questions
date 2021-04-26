import { getInitialData } from '../Utils/api'
import { receiveUsers } from '../Actions/users'
import { receiveQuestions } from '../Actions/questions'
import { setAuthedUser } from '../Actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export default function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}