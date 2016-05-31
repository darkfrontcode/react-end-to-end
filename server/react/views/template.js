import React, {Component} from 'react'

export default class App extends Component{
	constructor(props, context){
		super(props, context)
		this.state = {
			friends: context.friends.friends
		}
	}
	render(){
		return 	<div className="template">
					<div className="container-fluid">
						<div className="row">
							<header className="root">
								<h2 className="text-center">React End(2)End</h2>
							</header>
						</div>
					</div>
					<hr/>
					{
						React.cloneElement(this.props.children, {
							friends: this.state.friends
						})
					}
				</div>
	}
}

App.contextTypes = {
	friends: React.PropTypes.object.isRequired
}
