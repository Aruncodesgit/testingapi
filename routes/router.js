const express = require('express');
const router = express.Router(); 

const ctrltest = require('../controllers/user.controller');

router.get('/test', ctrltest.userDetails);


module.exports = router;