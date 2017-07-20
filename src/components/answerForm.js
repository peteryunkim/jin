import React from 'react'

class AnswerForm extends React.Component{
	constructor(){
		super()
		this.state={
			answer: ''
		}
	}

	handleChange=(ev)=>{
		this.setState({
			answer: ev.target.value
		})
	}

	handleSubmit=(ev)=>{
		ev.preventDefault()
		this.props.onSubmit(this.state.answer)
		this.setState({
			answer: ''
		})
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input type='text' onChange={this.handleChange} value={this.state.answer}/>
			</form>
		)
	}
}

export default AnswerForm