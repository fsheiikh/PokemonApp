var mongoose = require('mongoose');
var Team = mongoose.model('Team');

module.exports = {
	index: function(req, res){
		Team.find({}).populate('_user').exec(function(err, teams){
			res.json(teams)
		})
	},

	create: function(req, res){
		var newTeam = new Team({
			pokemon : req.body.pokemon,
			_user : req.body.userID,
			total : req.body.total
		})
		newTeam.save(function(err, Team){
			res.json(Team)
		})
	},

	show : function(req, res){
		Team.findOne({_id : req.params.id}, function(err, Team){
			res.json(Team)
		})
	},

	destroy: function(req, res){
		Team.remove({_id : req.params.id}, function(err, data){
			res.json(true)
		})
	}




}