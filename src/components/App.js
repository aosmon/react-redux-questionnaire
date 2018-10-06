import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import '../App.css'
import Nav from './Nav'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {

	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}

  render() {
    return (
      <Router>
      	<div>
	      	<header>
	          <Nav />
	        </header>
	        <div className='container'>
	        	Test
	        </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
