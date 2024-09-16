const express = require('express');
const app = express();
let morgan = require('morgan')
require('dotenv').config()

app.use(morgan('dev'));

app.get('/', (req, res)=> {
    return res.json({hello:'hello'})
})

app.listen(process.env.PORT, ()=> {
    console.log('Server starts listening on localhost:'+process.env.PORT);
})