const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new schema({
    name : {
        type: String, 
        require: true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String, 
        require: true
    }
})

UserSchema.statics.register = async function(name,email,password) {
    const userExists = await this.findOne({email});
    if(userExists){
        throw new Error('User already exists!')
    }

    const salt = await bcrypt.genSalt();
    const hashValue = await bcrypt.hash(password,salt);

    const user = await this.create({
        name, 
        email,
        password : hashValue
    });
    return user;
}

module.exports = mongoose.model('User', UserSchema);
