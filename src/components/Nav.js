import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul className='app-nav'>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
      </ul>
      <ul className='user-nav'>
        <li>
            Hello, Username
        </li>
        <li>
          <NavLink to='/' activeClassName='active'>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}