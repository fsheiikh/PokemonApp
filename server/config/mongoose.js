var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/PokemonApplication');

require(__dirname + '/../models/User');
require(__dirname + '/../models/Team');