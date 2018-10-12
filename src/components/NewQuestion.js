import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component{

	handleSubmitQuestion = () => {

	}
	
	render() {
		console.log(this.props);
		return (
			<div className='container'>

				<div className='new-question'>
					<h2 className='header'>Create New Question</h2>
					<div className='content'>
							<p>Complete the question</p>
							<h3>Would you rather ...</h3>
							<input type="text" name="option1" placeholder='Enter Option One Text Here'/>
							<span>OR</span>
            	<input type="text" name="option2" placeholder='Enter Option Two Text Here'/>	   
							<button className='submit' onClick={(e)=>this.handleSubmitQuestion(e)}>Submit</button>
					</div>
				</div>


			</div>
		)
	}
}

function mapStateToProps({questions}, {authedUser}){

  return {
  	authedUser,
    questions
  }
}

export default connect(mapStateToProps)(NewQuestion)