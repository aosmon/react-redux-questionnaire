import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleSaveAnswer } from '../actions/questions'
import { withRouter } from 'react-router-dom'

class QuestionDetails extends Component{

	state = {
		answer: ''
	}

	handleChange = (e) => {
	  this.setState({
	    answer: e.target.value
	  });
	}

	handleSubmit = (e) => {
		e.preventDefault()

		const { dispatch, question, authedUser } = this.props
		const qid = question.id
		const { answer } = this.state

		dispatch(handleSaveAnswer({authedUser, qid, answer}))

	  this.setState({
	    answer: ''
	  });		
	}

	render() {
		const {question} = this.props
		const option1 = question.optionOne.votes.length
		const option2 = question.optionTwo.votes.length
		
		//Show results or submit answer

		return (
			<div className = 'container'>
			{question.hasAnswered && (

				<div className='question-results'>
					<h4 className='header'>Asked by {question.author}:</h4>
					<div className='content'>
						<img className='avatar' src={'/images/' + question.avatar} alt='User avatar'/>
						<div className='text'>
							<h2>Results:</h2>
							<div className={question.answer === 'optionOne' ? 'result chosen' : 'result'}>
	            	<p>Would you rather {question.optionOne.text}?</p>
	            	<div className='data'>
	            		<div className="meter">
  									<span style={{width: (option1/(option1+option2)*100)+'%'}}>{(option1/(option1+option2)*100).toFixed(0)}%</span>
									</div>
	            		{option1} out of {option1+option2} votes
	            	</div>
	            </div>
							<div className={question.answer === 'optionTwo' ? 'result chosen' : 'result'}>
	            	<p>Would you rather {question.optionTwo.text}?</p>
	            	<div className='data'>
	            		<div className="meter">
  									<span style={{width: (option2/(option1+option2)*100)+'%'}}>{(option2/(option1+option2)*100).toFixed(0)}%</span>
									</div>
	            		{option2} out of {option1+option2} votes
	            	</div>
	            </div>
						</div>
					</div>
				</div>

			)}

			{!question.hasAnswered && (

				<div className='question-details'>
					<h4 className='header'>{question.author} asks:</h4>
					<div className='content'>
						<img className='avatar' src={'/images/' + question.avatar} alt='User avatar'/>
						<div className='text'>
							<form onSubmit={this.handleSubmit}>
								<h2>Would You Rather ...</h2>
								<label>
									<input type="radio" 
										name="options" 
										value="optionOne"
										onChange={this.handleChange}
									/>
		            	{question.optionOne.text}
		            </label>
		            <label>
		            	<input type="radio" 
			            	name="options" 
			            	value="optionTwo"
			            	onChange={this.handleChange}
		            	/>
		            	{question.optionTwo.text}
		            </label>
								<button 
								className='submit'
								disabled={this.state.answer === ''}>Submit</button>
							</form>
						</div>
					</div>
				</div>

			)}
			</div>
		)
	}
}

function mapStateToProps({questions, users, authedUser}, props){
	const { id } = props.match.params
	const question = questions[id]

	return {
		authedUser,
		question: formatQuestion(question, users[question.author], authedUser)
	}
}

export default withRouter(connect(mapStateToProps)(QuestionDetails))