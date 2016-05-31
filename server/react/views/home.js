import React, {Component} from 'react'
import { Link } from 'react-router'
import $ from 'jquery'

export default class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			friend: null
		}
	}

	random_friend(){
        let index = Math.floor(Math.random() * this.props.friends.length)
        return this.props.friends[index].first_name
	}

	shuffle() {
		let new_friend = this.random_friend()

		if($('#random_friend_name').text() != new_friend){
			this.setState({
				friend: new_friend
			})
		}else{
			this.shuffle()
		}
	}

	render(){
		return 	<section id="home">
					<div className="text-center">
						<p>Click in the button below to know<br/>who are your best pal</p>
						{
							(()=>{
								if(this.state.friend != null){
									return <h4>
												<br/>
												Your best pal is&nbsp;
												<strong>
													<u id="random_friend_name" className="text-primary">
														{this.state.friend}
													</u>
												</strong>
											</h4>
								}
							})()
						}
						<br/>
						<button className="btn btn-info" onClick={this.shuffle.bind(this)}>
							{
								(()=>{
									if(this.state.friend == null) return <span>Find it out</span>
									else return <span>Try again?</span>
								})()
							}
						</button>
						<span>&nbsp;&nbsp;</span>
						<Link to="about" className="btn btn-info" id="button_list">See full list of your friends</Link>
					</div>
				</section>
	}
}
