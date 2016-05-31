import React, {Component} from 'react'
import { Link } from 'react-router'

export default class About extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return 	<section id="about">
					<nav className="root">
					<ul className="list-inline text-center text-uppercase">
						<li>
							<Link to="home" className="btn btn-primary btn-xs text-capitalize">Back to home</Link>
						</li>
					</ul>
					</nav>
					<hr/>
					<table className="table table-striped">
						<thead>
							<tr>
								<td>
									<h2 className="text-center">Your friends list</h2>
								</td>
							</tr>
						</thead>
						<tbody>
							{this.props.friends.map((friend, key)=>{
								return 	<tr key={key}>
											<td>
												 {friend.first_name}&nbsp;{friend.last_name}
											</td>
										</tr>
							})}
						</tbody>
					</table>
				</section>
	}
}
