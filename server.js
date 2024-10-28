const express = require('express');
const cors = require('cors');
const connectToDb = require('./db');
const dotenv = require('dotenv').config();
const Customer = require('./model/customer')


const app = express();
app.use(express.json());
app.use(cors({
    origin: ["https://lic-frontend.vercel.app", "http://localhost:3000"]
}));


connectToDb();

app.get('/', async(req,res)=>{

    try{
        const customers = await Customer.find()
        return res.status(200).json({customers: customers})
    }catch(error){
        console.log(error)
    }
})

app.post('/customer', async(req,res)=>{
    console.log(req.body);

    try{
        const cus = await new Customer(req.body)
        await cus.save();
        return res.status(201).json("Customer Added to db")
    }catch(error){
        console.log(error)
    }
})

const port = process.env.port || 3001;

app.listen(port,()=>{
    console.log(`Server running at ${port}`)
});