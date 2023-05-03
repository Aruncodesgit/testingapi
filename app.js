const express = require('express');
const app = express();
require('./model/db');
const router = express.Router(); 
//const rtsIndex = require('./routes/router');
const ctrltest = require('./controllers/user.controller');

app.get('/test', ctrltest.userDetails);

app.use('/', router);

// app.get('/',   (req, res) => {
//      res.send('hello world')
// })


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})

module.exports = router;