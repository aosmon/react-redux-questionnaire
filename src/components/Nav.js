import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { signout } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'


class Nav extends Component {

  handleSignout = (e) => {
    e.preventDefault()

    const { dispatch} = this.props
    dispatch(signout())
  }

  render(){

    const {authedUser, username, avatarURL} = this.props

    if (authedUser===null) {
      console.log('redirecting')
      return <Redirect to='/login' />
    }

    return (
      <nav className='nav'>
        <ul className='app-nav'>
          <li>
            <NavLink to='/' exact activeClassName='nav-active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/newquestion' activeClassName='nav-active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='nav-active'>
              Leader Board
            </NavLink>
          </li>
        </ul>
        {authedUser && (
        <ul>
          <li className='username'>
            <NavLink to='#'>     
              <span>Hello, {username}</span>      
              <img src={'/images/' + avatarURL} alt='User avatar'/>
            </NavLink>
          </li>
           <li>
            <NavLink to='#' onClick={this.handleSignout}>
              Logout
            </NavLink>
          </li>
        </ul>
        )}
      </nav>
    )


  }
}

function mapStateToProps({authedUser, users}){
  if (authedUser !== null) {
    return {
      authedUser,
      username: users[authedUser].name,
      avatarURL: users[authedUser].avatarURL
    }
  }
  return {
    username: '',
    avatarURL: ''
  }
}

export default withRouter(connect(mapStateToProps)(Nav))