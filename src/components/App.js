import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import '../App.css'
import Nav from './Nav'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import QuestionDetails from './QuestionDetails'
import LoadingBar from 'react-redux-loading'
import Login from './Login'

class App extends Component {

	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}

  render() {

    return (
      <Router>
      	{this.props.authedUser === null
      		? <Login />
      		:	(
		      	<Fragment>
			      	<header>
			          <Nav />
			          <LoadingBar />
			        </header>
			        <main>
					        	{this.props.loading === true
				        		? null
				        		: <div>
				        				<Route path='/' exact component={Dashboard} />
				        				<Route path='/questionDetails/:id' component={QuestionDetails} />
				        				<Route path='/leaderboard' component={LeaderBoard} />
				        				<Route path='/newquestion' component={NewQuestion} />
				        			</div>
				        			}        	
			        </main>
		        </Fragment>
      	)}
      </Router>
    );
  }
}

function mapStateToProps({authedUser, questions, users}){
	return {
		loading: questions==={} || users==={},
		authedUser
	}
}

export default connect(mapStateToProps)(App)
