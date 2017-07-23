import React from 'react'
import AnswerForm from '../components/answerForm'


class main extends React.Component {
	constructor(){
    super()
    this.state = {
			collection: ["Settlers of Catan", "7 Wonders", "Pandemic", "Dead Of Winter"]
		}
  }

 	handleSubmit = (game) => {
 		this.setState({
 			collection: [...this.state.collection, game]
 		})
 	}	 

  render(){
  	// debugger
  	let list = this.state.collection.map(game => <li>{game}</li>)
  	return(
  		<div>
	  		<ul>
	  			{list}
	  		</ul>
	  		<h5> 
	  			Add a game: <AnswerForm onSubmit={this.handleSubmit}/>
	  		</h5>
	  	</div>
  	)
  }
}

export default main