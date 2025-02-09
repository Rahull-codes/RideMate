const mongoose = require('mongoose')
const bcrpt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname : {
        firstname:{
            type: String,
            required: true,
            minlength : [3 , 'First name must be atleast 3 chracters long']
        },
        lastname:{
            type: String,
            minlength : [3 , 'Last name must be atleast 3 chracters long']
        }
    },

    email : {
        type : String ,
        required : true ,
        unique : true ,
        minlength : [5 , 'email must contain @gmail.com']
    },

    password : {
        type : String ,
        required : true ,
        select : false ,
    },

    socketId : {
        type : String
    },
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrpt.compare(password , this.password);
}

userSchema.statics.hashPassword =  async function (password){
    return await bcrpt.hash(password , 10 );
}

const userModel = mongoose.model('user' , userSchema)

module.exports = userModel
