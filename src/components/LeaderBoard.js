import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserScore from './UserScore'
import { withRouter } from 'react-router-dom'

class LeaderBoard extends Component{
	
	render() {
		console.log(this.props);
		const {userIds} = this.props

		return (
			<div className='leaderboard container'>
				<ul>
					{userIds.map((id)=>(
						<li key={id}>
							<UserScore id={id} />
						</li>
					))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps({users}){

  return {
    userIds: Object.keys(users)
    	.sort((a,b) => ((Object.keys(users[b].answers).length+users[b].questions.length)-(Object.keys(users[a].answers).length+users[a].questions.length)))
  }
}

export default withRouter(connect(mapStateToProps)(LeaderBoard))