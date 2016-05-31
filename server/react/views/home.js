import React, {Component} from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component{
	constructor(props){
		super(props)
	}
	render(){

		// console.log(this.props.friends)

		return <section id="home">
					{
						// this.props.friends.map((friend, key)=>{
						// 	return <span>{friend.first_name} {friend.last_name}</span>
						// })
					}
				</section>
	}
}
