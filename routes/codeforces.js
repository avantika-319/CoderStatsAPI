const express = require('express');
const router = express.Router();
const axios =  require('axios')

router.get('/:username', async(req,res)=>{
    const {username} =req.params; //dereference
    
    try{
        const response = await axios.get(`https://codeforces.com/api/user.info?handles=${username}`);
        res.send(response.data);
    }catch(error){
        res.status(500).send(error); //500->server error
    }
})

router.get('/:username/rating', async(req,res)=>{
    const {username} =req.params; //dereference
    
    try{
        const response = await axios.get(`https://codeforces.com/api/user.rating?handle=${username}`);
        res.send(response.data);
    }catch(error){
        res.status(500).send(error); //500->server error
    }
})

router.get('/:username/status', async(req,res)=>{
    const {username}=req.params;

    try{
        const response= await axios.get(`https://codeforces.com/api/user.status?handle=${username}&from=1&count=10`);
        res.send(response.data);
    }catch(error){
        res.status(500).send(error);
    }
})

router.get('/:username/blogentries', async(req,res)=>{
    const {username}=req.params;

    try{
        const response=await axios.get(`https://codeforces.com/api/user.blogEntries?handle=${username}`);
        res.send(response.data);
    }catch(error){
        res.status(500).send(error);
    }
})

module.exports = router;