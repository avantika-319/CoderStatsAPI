const express = require('express');
const { query_profile, query_rating ,query_solved_problems, query_badges, query_ac_submission} = require('../utils/leetcode_queries');
const axiosUtil = require('../utils/utility');

const router = express.Router();

router.get('/:username', async (req, res) => {
    const query = query_profile;
    const { username } = req.params;
  
    const data = await axiosUtil(query, { username });
    res.json(data);
})

router.get('/:username/rating', async(req,res)=>{
    const query = query_rating;
    const {username} = req.params;

    const data = await axiosUtil(query, {username : username});
    res.json(data)
})

router.get('/:username/solvedproblems', async(req,res)=>{
    const query = query_solved_problems;
    const {username} = req.params;

    const data = await axiosUtil(query, { username });
    res.json(data);
})

router.get('/:username/badges', async(req,res)=>{
    const query = query_badges;
    const {username} = req.params;

    const data = await axiosUtil(query, { username });
    res.json(data);
})

router.get('/:username/acSubmission', async(req,res)=>{
    const query = query_ac_submission;
    const {username} = req.params;
    let { limit } = req.query; 
    if (!limit) limit = 10;

    const data = await axiosUtil(query, { username ,limit });
    res.json(data);
})

module.exports = router;