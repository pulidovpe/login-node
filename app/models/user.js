// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcryptjs');

// define the schema for our user model

var email_match = [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,"Coloca un email valido"];

var userSchema = mongoose.Schema({

	local 			: {
		email 		: {
			type		: String,
			required : "El correo es obligatorio",
			unique	: true,
			match 	: email_match
		},
		password 	: {
			type		: String,
			required : true,
			maxlength: [30,"Password muy grande"],
			minlength: [6,"Password muy corto"]
		},
	},
	facebook        : {
		id           : String,
		token        : String,
		email        : String,
		name         : String
	},
	twitter          : {
		id           : String,
		token        : String,
		displayName  : String,
		username     : String
	},
	google           : {
		id           : String,
		token        : String,
		email        : String,
		name         : String
	}

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);