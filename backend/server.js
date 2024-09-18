const express = require('express');
const app = express();
const cors = require('cors')
let morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const recipesRoutes = require('./routes/recipes');

let mongoURL = "mongodb+srv://anandaooit:test1234@mern-cluster.bl5c9.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster"
mongoose.connect(mongoURL).then(()=> {
    console.log('connected to db');
    app.listen(process.env.PORT, ()=> {
        console.log('Server starts listening on localhost:'+process.env.PORT);
    })
})

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.get('/', (req, res)=> {
    return res.json({hello:'hello'})
})

app.use('/api/recipes', recipesRoutes);

