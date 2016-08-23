var Users = require(__dirname + '/../controllers/Users');
var Teams = require(__dirname + '/../controllers/Teams');

module.exports = function(app){
	app.post('/users', Users.create)

	app.put('/users/:id', Users.update)



 
	app.post('/teams', Teams.create)

	app.get('/teams', Teams.index)

	app.get('/teams/:id', Teams.show)

	app.delete('/teams/:id', Teams.destroy)
}