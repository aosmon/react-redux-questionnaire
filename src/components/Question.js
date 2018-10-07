import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class Question extends Component{
	render() {
		// console.log(this.props);
		return (
			<div className='question'>
				<div>Question ID: {this.props.id}</div>
				<div>Author: {this.props.question.author}</div>
				<div>Author's avatar: {this.props.question.avatar}</div>
				<div>Text: {this.props.question.optionOne.text}</div>
				<div>Answered: {this.props.question.hasAnswered ? 'Yes' : 'No' } </div>

			</div>
		)
	}
}

function mapStateToProps({questions, users, authedUser},{id}){
	const question = questions[id]

	return {
		authedUser,
		question: formatQuestion(question, users[question.author], authedUser)
	}
}

export default connect(mapStateToProps)(Question)