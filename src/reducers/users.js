import { RECEIVE_USERS } from '../actions/users'
import { SAVE_QUESTION_ANSWER, SAVE_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
	switch(action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			}
		case SAVE_QUESTION_ANSWER:
			const {authedUser, qid, answer} = action
			console.log(authedUser, qid, answer)
			return {
				...state,
				[authedUser]:{
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer,
					}
				}
			}
		case SAVE_QUESTION:
		const {question} = action
			return {
				...state,
				[question.author]: {
					...state[question.author],
					questions: state[question.author].questions.concat([question.id])
				}
			}
		default:
			return state
	}
}