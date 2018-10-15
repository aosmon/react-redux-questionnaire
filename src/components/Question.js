import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { withRouter } from 'react-router-dom'

class Question extends Component{

	toQuestionDetails = (e, id) =>{
		e.preventDefault();
		this.props.history.push(`/questions/${id}`)
	}

	render() {
		const {id, question, avatarURL} = this.props;

		return (
				
				<div className='question'>
					<h3 className='header'>{question.author} asks:</h3>
					<div className='content'>
						<img className='avatar' src={'/images/' + avatarURL} alt='User avatar'/>
						<div className='text'>
							<h4>Would you rather...</h4>
							<p>...{question.optionOne.text}...</p>
							<button className='toQuestionDetails' onClick={(e)=>this.toQuestionDetails(e, id)}>View Poll</button>
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
		question: formatQuestion(question, users[question.author], authedUser),
		avatarURL: users[question.author].avatarURL
	}
}

export default withRouter(connect(mapStateToProps)(Question))