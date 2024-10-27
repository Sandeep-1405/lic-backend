const mongoose = require('mongoose');

const CustomerDetails = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:true
    }
})

const Customer = mongoose.model("Customer",CustomerDetails)

module.exports = Customer;