const mongoose = require('mongoose');

const connectToDb = async()=>{
    try{
        await mongoose.connect(process.env.mongodb_url)
        console.log("Connected to MongoDb")
    }catch(error){
        console.log(error);
    }
    
}

module.exports = connectToDb