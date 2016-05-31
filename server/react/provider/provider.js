import React, {Component} from 'react'

export default class Provider extends Component {
	getChildContext() {
		return {
			friends: this.props.friends
		}
	}
	render() {
		return this.props.children
	}
}

Provider.childContextTypes = {
	friends: React.PropTypes.object.isRequired
}
