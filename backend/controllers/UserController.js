const User = require('../models/User');
const bcrypt = require('bcrypt');
const UserController = {
    login : (req, res) =>{
        return res.json({msg:
            'user login api hit'
        });
    },
    register : async(req, res) => {
        try {
            const {name, email, password} = req.body;
            const userExists = await User.findOne({email});
            if(userExists){
                throw new Error('User already exists!')
            }
            const salt = await bcrypt.genSalt();
            const hashValue = await bcrypt.hash(password,salt);
            const user = await User.create({
                name, 
                email,
                password : hashValue
            });
            return res.json(user);
        } catch (e) {
            return res.status(400).json({error : e.message});
        }
    }
}

module.exports = UserController;