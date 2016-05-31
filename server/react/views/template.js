import React, {Component} from 'react'

export default class App extends Component{
	constructor(props, context){
		super(props, context)
		// console.log(this.props)
		// this.state = context.friends
	}
	render(){
		return 	<div className="template">

					
					div.container-fluid
			            div.row
			                header.root
			                    h2.text-center Angular end-to-end

			                hr

					{this.props.children}
					{
						// React.cloneElement(this.props.children, {
						// 	friends: this.state
						// })
					}
				</div>
	}
}

App.contextTypes = {
	friends: React.PropTypes.object.isRequired
}
