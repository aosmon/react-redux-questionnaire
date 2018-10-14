import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component{

	state = {
		optionOneText: '',
		optionTwoText: '',
		toHome: false
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

		this.setState(() => ({
			optionOneText: '',
			optionTwoText: '',
			toHome: true,
		}))
	}

	render() {

		const {optionOneText, optionTwoText, toHome} = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    const optionOneLeft = 90 - optionOneText.length
    const optionTwoLeft = 90 - optionTwoText.length

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
								maxLength={90}
								placeholder='Enter Option One Text Here'/>
									<div className='question-length'>
								{optionOneLeft <= 30 && (
									optionOneLeft
								)}
									</div>
							<span>OR</span>
            	<input 
	            	type="text" 
	            	name="option2" 
	            	onChange={(e)=>this.handleChange(e, "optionTwoText")}
	            	maxLength={90}
	            	placeholder='Enter Option Two Text Here'/>	   
									<div className='question-length'>
								{optionTwoLeft <= 30 && (
									optionTwoLeft
								)}
									</div>
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
  	authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)