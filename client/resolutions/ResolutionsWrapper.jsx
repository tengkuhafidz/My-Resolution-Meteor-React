import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';


Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionsWrapper extends TrackerReact(React.Component){

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

	resolutions(){
		return Resolutions.find({}, { sort: { createdAt: -1 } }).fetch();
	}

	render(){
	
		return(
			<div>
				<h1> My Resolutions </h1>
				<ResolutionsForm />
				<ul className="resolutions">
					{this.resolutions().map((resolution)=>{
						return <ResolutionSingle resolution={resolution} key={resolution._id}/>

					})}
				</ul>
			</div>
		)
	}
}