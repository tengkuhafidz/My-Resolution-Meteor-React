Meteor.methods({
	addResolution(text){
		check(text, String)
		if(!Meteor.userId()){
			throw new Meteor.Error('not-authorised')
		}

		Resolutions.insert({
			text,
			user: Meteor.userId(),
			complete: false,
			createdAt: new Date()
		})
	},
	updateResolution(resolution){
		check(resolution, Object)
		if(Meteor.userId()!= resolution.user){
			throw new Meteor.Error('not-authorised')
		}
		Resolutions.update(resolution._id, {$set: {complete: !resolution.complete}})
	},
	deleteResolution(resolution){
		check(resolution, Object)

		if(Meteor.userId()!= resolution.user){
			throw new Meteor.Error('not-authorised')
		}
		Resolutions.remove(resolution._id)
	}
});