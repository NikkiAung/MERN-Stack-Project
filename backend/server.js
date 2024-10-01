const express = require('express');
const app = express();
app.use(express.static('public'))
const cors = require('cors')
let morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const recipesRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users')
let cookieParser = require('cookie-parser')
const AuthMiddleware = require('./Middleware/AuthMiddleware')
let mongoURL = "mongodb+srv://anandaooit:test1234@mern-cluster.bl5c9.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster"
mongoose.connect(mongoURL).then(()=> {
    console.log('connected to db');
    app.listen(process.env.PORT, ()=> {
        console.log('Server starts listening on localhost:'+process.env.PORT);
    })
})

app.use(morgan('dev'));
app.use(express.json());
app.use(cors( {
    origin : 'http://localhost:5173',
    credentials : true
} ));
app.use(cookieParser());
app.get('/', (req, res)=> {
    return res.json({hello:'hello'})
})

app.use('/api/recipes',AuthMiddleware, recipesRoutes);
app.use('/api/users', userRoutes);

app.get('/set-cookie',(req,res)=>{
    res.cookie('name','Aung');
    res.cookie('note','important',{httpOnly:true});
    return res.send('Cookie alr set!')
})

app.get('/get-cookie',(req, res)=>{
    const cookies = req.cookies;
    return res.json(cookies);
})
