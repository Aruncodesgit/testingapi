const mongoose = require('mongoose'); 

var userSchema = new mongoose.Schema({
    name: {
        type: String ,
        default: 'Name can\'t be empty'
    } 
});
 

mongoose.model('User', userSchema);