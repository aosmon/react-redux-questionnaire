import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class QuestionDetails extends Component{
	render() {
		return (
			<div className='question-container'>
				<h3 className='question-header'>{this.props.question.author} asks:</h3>
				<div className='question'>
					<img className='avatar' href={this.props.question.avatar} alt='User avatar'/>
					<div className='question-content'>
						<h4>Would you rather...</h4>
						<p>...{this.props.question.optionOne.text}...</p>
						<button className='toQuestionDetails' onClick={(e)=>this.toQuestionDetails(e, this.props.id)}>View Poll</button>
					</div>
				</div>
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

export default connect(mapStateToProps)(QuestionDetails)