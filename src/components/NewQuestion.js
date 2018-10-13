import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
class NewQuestion extends Component{

	state = {
		optionOneText: '',
		optionTwoText: '',
	}

	handleChange = (e, option) => {
		const text = e.target.value

		this.setState(() => ({
			[option]: text
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const {optionOneText, optionTwoText} = this.state
		const { dispatch} = this.props

		dispatch(handleAddQuestion({optionOneText, optionTwoText}))
	}

	render() {

		const {optionOneText, optionTwoText} = this.state

		return (
			<div className='container'>

				<div className='new-question'>
					<h2 className='header'>Create New Question</h2>
					<div className='content'>
						<form onSubmit={this.handleSubmit}>
							<p>Complete the question</p>
							<h3>Would you rather ...</h3>
							<input 
								type="text" 
								name="option1" 
								onChange={(e)=>this.handleChange(e, "optionOneText")}
								placeholder='Enter Option One Text Here'/>
							<span>OR</span>
            	<input 
	            	type="text" 
	            	name="option2" 
	            	onChange={(e)=>this.handleChange(e, "optionTwoText")}
	            	placeholder='Enter Option Two Text Here'/>	   
							<button 
								className='submit'
								type='submit'
								disabled={optionOneText === '' || optionTwoText === ''}
								>Submit</button>
						</form>
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