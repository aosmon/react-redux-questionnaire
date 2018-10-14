import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component{

	state = {
		activeTab: 'unanswered'
	}

	toggleTab = (tab) => {
		this.setState(()=>({
			activeTab: tab
		}))
	}

	render() {

		const {activeTab} = this.state

		return (
			<div className='dashboard container'>
				<div className='tabs'>
					<button
						className={activeTab==='answered'? 'tab active' : 'tab'}
						onClick={()=>{this.toggleTab('answered')}}
						disabled={activeTab==='answered'}
					>
						<h3>Answered Questions</h3>
					</button>
					<button
						className={activeTab==='unanswered'? 'tab active' : 'tab'}
						onClick={()=>{this.toggleTab('unanswered')}}
						disabled={activeTab==='unanswered'}
					>
						<h3>Unanswered Questions</h3>
					</button>				
				</div>
				<div className='content'>					
					{activeTab==='answered' && (
						<ul className='question-list'>
							{this.props.answeredIds.map((id)=>(
								<li key={id}>
									<Question id={id} />
								</li>
							))}
						</ul>				
					)}
					{activeTab==='unanswered' && (
						<ul>
							{this.props.unansweredIds.map((id)=>(
								<li key={id}>
									<Question id={id} />
								</li>
							))}
						</ul>
					)}
				</div>
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