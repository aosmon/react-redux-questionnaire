import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import '../App.css'
import Nav from './Nav'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

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
	        <main>
	        	{this.props.loading === true
	        		? null
	        		: <Dashboard />
	        	}
	        </main>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}){
	return {
		loading: authedUser===null
	}
}

export default connect(mapStateToProps)(App)
