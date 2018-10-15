import { SET_AUTHED_USER, SIGN_OUT } from '../actions/authedUser.js'

export default function authedUser (state = null, action) {
	switch(action.type) {
		case SET_AUTHED_USER:
			return action.id
		case SIGN_OUT:
			return null
		default:
			return state
	}
}