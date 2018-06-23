import React from 'react'
import '../styles/components/app.scss'
import bearImage from '../assets/bear.png'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}
	render() {
		return (
			<div>
				<h1>My React App</h1>
				<img src={bearImage} />
			</div>
		)
	}
}
