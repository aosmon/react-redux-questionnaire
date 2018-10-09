import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { withRouter } from 'react-router-dom'

class QuestionDetails extends Component{
	render() {
		return (
			<div className = 'container'>
				<div className='question-details'>
					<h4 className='header'>{this.props.question.author} asks:</h4>
					<div className='content'>
						<img className='avatar' href={this.props.question.avatar} alt='User avatar'/>
						<div className='text'>
							<h2>Would You Rather ...</h2>
							<div>
								<input type="radio" name="option1" value="{this.props.question.optionOne.text}"/>
	            	{this.props.question.optionOne.text}
	            </div>
	            <div>
	            	<input type="radio" name="option2" value="{this.props.question.optionOne.text}"/>
	            	{this.props.question.optionTwo.text}
	            </div>
							<button className='submit'>Submit</button>
						</div>
					</div>
				</div>
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