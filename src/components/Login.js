import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReduxLogo from '../images/ReduxLogo.jpg'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component{

	state = {
		username: '',
		loggedIn: false
	}
	
	handleSignin = (e) => {
		e.preventDefault()

		const {username} = this.state
		const { dispatch} = this.props

		dispatch(setAuthedUser(username))
		this.setState(()=>({
			loggedIn: true
		}))

	}

	handleChange = (e) => {
		const selected = e.target.value
		this.setState(()=>({
			username: selected
		}))
	}

	render() {
		const {username, loggedIn} = this.state
		const {users, userIds} = this.props

		if(loggedIn){
			return <Redirect to='/' />
		}

		return (
			<div className='login container'>
				<div className='header'>
					<h1>Welcome to the Would You Rather App!</h1>
					<p>Please sign in to continue</p>
				</div>
				<div className='content'>
					<img src={ReduxLogo} />
					<form onSubmit={(e)=>this.handleSignin(e)}>
						<h2>Sign in</h2>
						<select 
							name="users" 
							placeholder='Select User'
							value={username}
							onChange={(e)=>this.handleChange(e)}>
							<option value='' disabled>Select User</option>
							{userIds.map((id)=>(
								 <option value={id} key={id}>
								 	{users[id].name}
								 </option>
							))}
						</select>
						<button 
							className='login' 
							type='submit'
							disabled={this.state.username===''}
						>Sign In</button>
					</form>
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