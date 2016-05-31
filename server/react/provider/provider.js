import React, {Component} from 'react'

export default class Provider extends Component {
	getChildContext() {
		return {
			friend: this.props.friend
		}
	}
	render() {
		return this.props.children
	}
}

Provider.childContextTypes = {
	friend: React.PropTypes.object.isRequired
}
