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
let cron = require('node-cron');
const User = require('./models/User');
const sendEmail = require('./helpers/sendEmail')

let mongoURL = "mongodb+srv://anandaooit:test1234@mern-cluster.bl5c9.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster"
mongoose.connect(mongoURL).then(()=> {
    console.log('connected to db');
    app.listen(process.env.PORT, ()=> {
        console.log('Server starts listening on localhost:'+process.env.PORT);
        cron.schedule('*/4 * * * * *', async () => {
            let user = await User.findByIdAndUpdate('66f2348903955dc44334060c', {
                name : "mgmg " + Math.random()
            })
        });
    })
})

app.use(morgan('dev'));
app.use(express.json());
app.use(cors( {
    origin : 'http://localhost:5173',
    credentials : true
} ));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res)=> {
    // return res.render('email')
    return res.json({hello:'hello'})
})

app.use('/api/recipes',AuthMiddleware, recipesRoutes);
app.use('/api/users', userRoutes);

app.get('/set-cookie',(req,res)=>{
    res.cookie('name','Aung');
    res.cookie('note','important',{httpOnly:true});
    return res.send('Cookie alr set!')
})

app.get('/send-email', async (req, res) => {
    try {
        await sendEmail({
            view : 'email',
            data : {
                name : 'Mg Mg'
            },
            from: 'mgmg@gmail.com',
            to : "nikkiaung@gmail.com",
            subject: "testing",
        })
        return res.send('email alr sent');
    } catch (error) {
        res.status(500).json({
            message : error.message,
            status : 500
        })
    }
})

app.get('/get-cookie',(req, res)=>{
    const cookies = req.cookies;
    return res.json(cookies);
})
