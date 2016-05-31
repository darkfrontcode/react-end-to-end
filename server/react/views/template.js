import React, {Component} from 'react'

export default class App extends Component{
	constructor(props, context){
		super(props, context)
		this.state = context.friends
	}
	render(){
		return 	<div className="template">
					{React.cloneElement(this.props.children, {
						friends: this.state
					})}
				</div>
	}
}

App.contextTypes = {
	data: React.PropTypes.object.isRequired
}
