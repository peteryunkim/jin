import React from 'react'
import AnswerForm from '../components/answerForm'
import jdict from '../components/dictionary'

const matchingContainer = () => {
	const sounds = ["\u3042", "\u3044", "\u3046", "\u3048", "\u304a"]
	

	const handleSubmit=(answer) => {
		// if (jdict.jdict[answer] === "a"){
		// 	console.log('true')
		// }
		console.log(jdict.jdict[answer])
	}

	let tileForSounds = (sounds) => {
		return sounds.map(el => <div id='tiles'>
			{el}
			<AnswerForm onSubmit={handleSubmit}/>
			</div>)
	}

	return(
		<div id='tile-container'>
		{tileForSounds(sounds)}
		</div>
	)
}

export default matchingContainer