import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserScore extends Component{
	
	render() {
		console.log(this.props);
		const {users, id} = this.props
		const answersTotal = Object.keys(users[id].answers).length
		const questionsTotal = users[id].questions.length
		const score = answersTotal + questionsTotal

		return (
			<div  className='user'>

						<div className='content'>
							<img className='avatar' href={users[id].avatarURL} alt='User avatar'/>
							<div className='text'>
								<h2>{users[id].name}</h2>
								<div>
									<p>Answered questions<span>{answersTotal}</span></p>
									<p>Created questions<span>{questionsTotal}</span></p>
								</div>
							</div>
							<div className='score container'>
								<h4 className='header'>Score</h4>
								<div className='content'>
									<div className='data'>
										<span>{score}</span>
									</div>
								</div>
							</div>
						</div>

			</div>
		)
	}
}

function mapStateToProps({users}, {id}){

  return {
  	users
  }
}

export default connect(mapStateToProps)(UserScore)