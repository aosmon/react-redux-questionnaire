import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component{
	render() {
		return (
			<div className='dashboard container'>
				<h3>Answered Questions</h3>
				<ul className='question-list'>
					{this.props.answeredIds.map((id)=>(
						<li key={id}>
							<Question id={id} />
						</li>
					))}
				</ul>
				<h3>Unanswered Questions</h3>
				<ul>
					{this.props.unansweredIds.map((id)=>(
						<li key={id}>
							<Question id={id} />
						</li>
					))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps({questions, authedUser}){

	return{
		answeredIds: Object.keys(questions)
		.filter((id)=>(questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)))
		.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
		unansweredIds: Object.keys(questions)
		.filter((id)=>(!questions[id].optionOne.votes.includes(authedUser) && !questions[id].optionTwo.votes.includes(authedUser)))
		.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
	}
}

export default connect(mapStateToProps)(Dashboard)