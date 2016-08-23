var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	create: function(req, res){
		User.findOne({username: req.body.username}, function(err, oldUser){
			if(oldUser){
				res.json(oldUser)
			}
			else{
				var newUser = new User({
					username : req.body.username,
					
				});
				
				newUser.save(function(err, newUser){
					res.json(newUser)
					
				})

				
				

			}
		})
	},

	update: function(req, res) {
		User.findOne({_id: req.params.id}, function(err, user){
			user.gender = req.body.gender;

			if(user.gender == "Male"){
				user.image = 'http://orig04.deviantart.net/cb02/f/2012/357/b/5/jake_trainer_sprite__red_and_black__by_anonymousguy3-d5oxttw.png'
			}
			else {
				user.image = 'http://orig03.deviantart.net/1ab0/f/2014/108/2/5/pokemon_x_and_y___serena_sprite__by_geno2925-d7eyfwg.png'
			}

			user.save(function(err, user){
				console.log(user)
				res.json(user)
			})
		})
	}

}