import React, {Component} from 'react'

export default class About extends Component{
	dropForm(){
		Session.set('Meteor.loginButtons.dropdownVisible', true)
	}

	render(){
		return(
			<div>
				<h1> About Us </h1>
				<p> io3tu340btu 34[ntuv4 003rgio3r hogh 3oh ho4gh4h 24 io3tu340btu 34[ntuv4 003rgio3r hogh 3oh ho4gh4h 24</p>
				<button onClick={this.dropForm}> Register Now </button>
			</div>
		)
	}
}