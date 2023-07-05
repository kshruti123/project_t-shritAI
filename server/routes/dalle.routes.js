//interaction with dall-e api will be here
import express from 'express';
import * as dotenv from 'dotenv';
import {Configuration,OpenAIApi} from 'openai';

dotenv.config();

const router=express.Router();

const config=new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
});
//connects config and openai to generate images
const openai=new OpenAIApi(config);

//connect this route to index.js,import dalle at index.js
router.route('/').get((req,res)=>{
    res.status(200).json({message:"hello from dall.e routes"})
})

//create route that takes the prompt from frontend to backend
router.route('/').post(async(req,res)=>{
    try{
        const{prompt}=req.body;
       const response=await openai.createImage({
        prompt,
        n:1,
        size:'1024x1024',
        //format in which we see our img
        response_format:'b64_json'
       });
    
       const image=response.data.data[0].b64_json;
       //pass to fronend
       res.status(200).json({photo:image});

    }catch(error){
        console.error(error);
        res.status(500).json({message:"something went wrong"})
    }
})


export default router;