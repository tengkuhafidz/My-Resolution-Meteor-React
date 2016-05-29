import React, {Component} from 'react';

export default class ResolutionSingle extends Component {
	toggleChecked(){
		let res = this.props.resolution;
		Meteor.call('updateResolution', res)
	}

	deleteResolution(){
		let res = this.props.resolution;
		Meteor.call('deleteResolution', res)
	}

	render(){
		let res = this.props.resolution;
		const resolutionClass = res.complete ? "checked" : "";
		const status = res.complete ? <span className="completed"> Completed </span> : "";
		return(
			<li className={resolutionClass}>
				<input type="checkbox"  readOnly={true} checked={res.complete} onClick={this.toggleChecked.bind(this)}/>
				{res.text} 
				{status}
				<button className="btn-cancel" onClick={this.deleteResolution.bind(this)}>&times;</button>
			</li>
		)
	}

}