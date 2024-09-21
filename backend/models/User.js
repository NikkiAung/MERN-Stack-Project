const mongoose = require('mongoose');
const schema = mongoose.Schema;

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

module.exports = mongoose.model('User', UserSchema);
