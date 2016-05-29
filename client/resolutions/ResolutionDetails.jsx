import React, {Component} from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class ResolutionDetails extends TrackerReact(Component) {

	constructor(){
		super();

		this.state = {
			subsription: {
				resolutions: Meteor.subscribe("userResolutions")
			} 

		}
	}

	componentWillUnmount(){
		this.state.subsription.resolutions.stop();
	}

	resolution(){
		return Resolutions.findOne(this.props.id);
	}

	render(){
		let res = this.resolution()

		if(!res)
			return <h2>loading</h2>
		return(
			<h1>{res.text}</h1>
		)
		
	}
}