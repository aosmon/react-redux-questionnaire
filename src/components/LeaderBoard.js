import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component{
	
	render() {
		console.log(this.props);
		const {question, users} = this.props

		return (
			<div className='leaderboard container'>

				<ul>
					{this.props.userIds.map((id)=>(
						<li key={id}>
							<div  className='user'>
								<div className='content'>
									<img className='avatar' href={users[id].avatarURL} alt='User avatar'/>
									<div className='text'>
										<h2>{users[id].name}</h2>
										<div>
											<p>Answered questions<span>3</span></p>
											<p>Created questions<span>2</span></p>
										</div>
									</div>
									<div className='score container'>
										<h4 className='header'>Score</h4>
										<div className='content'>
											<div className='data'>
												<span>10</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>

			</div>
		)
	}
}

function mapStateToProps({questions, users}){

  return {
    questions,
    users,
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(LeaderBoard)