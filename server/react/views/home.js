import React, {Component} from 'react'
// import { Link } from 'react-router'
import $ from 'jquery'

export default class Home extends React.Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		this.state = null
	}

	random_friend(){
        let index = Math.floor(Math.random() * this.props.friends.length)
        return this.props.friends[index]
	}

	shuffle() {
		// let new_friend = this.random_friend()
		//
		// if($('#random_friend_name').text() != new_friend){
		// 	this.state.friend = new_friend
		// }else{
		// 	this.shuffle()
		// }

		this.state = "works";
		console.log(this.state)

	}

	change(){
		this.state = "hello"
		console.log(this.state)
	}

	render(){

		console.log(this.state)

		return 	<section id="home">
					<div className="text-center">
						<p onClick={this.change.bind(this)}>Click in the button below to know<br/>who are your best pal</p>
						{this.state}
						{
							// (()=>{
							// 	if(this.state.friend.length > 0){
							// 		return <h4>
							// 					<br/>
							// 					Your best pal is
							// 					<strong>
							// 						<u id="random_friend_name" className="text-primary">
							// 							{this.state.friend.first_name}
							// 						</u>
							// 					</strong>
							// 				</h4>
							// 	}
							// })()
						}
						<br/>
						<button className="btn btn-info" onClick={this.shuffle.bind(this)}>
							{
								// (()=>{
								// 	if(this.state.friend.length == 0) return <span>Find it out</span>
								// 	else return <span>Try again?</span>
								// })()
							}
						</button>
						<span>&nbsp;&nbsp;</span>
						<button className="btn btn-info">See full list of your friends</button>
					</div>
				</section>
	}
}
