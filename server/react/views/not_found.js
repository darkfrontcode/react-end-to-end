import React, {Component} from 'react'
import { Link } from 'react-router'

export default class NotFound extends React.Component{
	render(){
		return <section id="not_found">
					<h4>No route with this name.</h4>
					<Link to="home">Get back to home</Link>
				</section>
	}
}
