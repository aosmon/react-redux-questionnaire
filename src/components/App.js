import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import '../App.css'
import Nav from './Nav'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'

class App extends Component {

	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}

  render() {
  	console.log(this.props)
    return (
      <Router>
      	<div>
	      	<header>
	          <Nav />
	          <LoadingBar />
	        </header>
	        <main>
	        	{this.props.loading === true
	        		? null
	        		: <Dashboard authedUser={this.props.authedUser}/>
	        	}
	        </main>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}){
	return {
		loading: authedUser===null,
		authedUser
	}
}

export default connect(mapStateToProps)(App)
