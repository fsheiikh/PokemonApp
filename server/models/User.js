var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: String,
	gender: String, 
	image: String, 
	// pokemon: []
})

mongoose.model('User', UserSchema);
