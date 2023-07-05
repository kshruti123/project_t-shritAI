import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';
//to set up envi var
dotenv.config();

//setup express application
const app=express();

//set up middleware
app.use(cors());
//set weight of the payload that we can send
app.use(express.json({limig:"50mb"}))

app.use("/api/v1/dalle",dalleRoutes);

//set demo route
app.get('/',(req,res)=>{
    res.status(200).json({message:"hello world "})
})
app.listen(8080,()=>console.log('server has started on port 8080'))