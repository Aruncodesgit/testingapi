const express = require('express');
const app = express();
require('./model/db');

const rtsIndex = require('./routes/router');

app.use('/api', rtsIndex);

// app.get('/',   (req, res) => {
//      res.send('hello world')
// })


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})