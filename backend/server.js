const express = require('express');
const app = express();
let morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const recipesRoutes = require('./routes/recipes');
app.use(morgan('dev'));
let mongoURL = "mongodb+srv://anandaooit:test1234@mern-cluster.bl5c9.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster"
mongoose.connect(mongoURL).then(()=> {
    console.log('connected to db');
    app.listen(process.env.PORT, ()=> {
        console.log('Server starts listening on localhost:'+process.env.PORT);
    })
})
app.get('/', (req, res)=> {
    return res.json({hello:'hello'})
})

app.use('/api/recipes', recipesRoutes);

