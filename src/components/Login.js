import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReduxLogo from '../images/ReduxLogo.jpg'

class Login extends Component{
	
	handleLogout= () => {
		
	}

	render() {
		console.log(this.props);
		const {users} = this.props

		return (
			<div className='login container'>
				<div className='header'>
					<h1>Welcome to the Would You Rather App!</h1>
					<p>Please sign in to continue</p>
				</div>
				<div className='content'>
					<img src={ReduxLogo} />
					<h2>Sign in</h2>
					<select name="users" placeholder='Select User'>
						<option value=''>Select User</option>
						{this.props.userIds.map((id)=>(
							 <option value={id}>
							 	{users[id].name}
							 </option>
						))}
					</select>
					<button className='login' onClick={(e)=>this.handleLogout(e)}>Sign In</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps({authedUser, users}){

  return {
  	authedUser,
    users,
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)