var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
	pokemon: [],
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	total: {type: Number, default: 20}
})

mongoose.model('Team', TeamSchema);