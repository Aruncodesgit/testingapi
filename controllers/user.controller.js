const mongoose = require('mongoose');
const User = mongoose.model('User');  


module.exports.userDetails = async (req, res, next) => { 
    res.send('hello')
} 