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
  	console.log(this.props)
    return (
      <Router>
      	<Fragment>
	      	<header>
	          <Nav />
	          <LoadingBar />
	        </header>
	        <main>
	        	{this.props.loading === true
	        		? null
	        		: <div>
	        				<Route exact path='/' render={()=>(
	        					<Dashboard authedUser={this.props.authedUser}/>
	        				)}/>
	        				<Route path='/questionDetails/:id' component={QuestionDetails} />
	        				<Route path='/leaderboard' component={LeaderBoard} />
	        				<Route exact path='/newquestion' render={()=>(
	        					<NewQuestion authedUser={this.props.authedUser}/>
	        				)}/>
	        			</div>
	        	}
	        </main>
        </Fragment>
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
