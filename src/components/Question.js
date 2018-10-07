import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class Question extends Component{
	render() {
		return (
			<div className='question'>
			</div>
		)
	}
}

mapStateToProps({authedUser, questions, users}{id}){
	const question = questions[id]

	return {
		authedUser,
		tweet: formatQuestion(question, users[question.author], authedUser)
	}
}

export default connect(mapStateToProps)(Question)