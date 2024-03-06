const express = require('express');
const codeforcesRouter = require('./routes/codeforces');
const leetcodeRouter = require('./routes/leetcode');

const app = express(); //instance

app.get('/',(req,res)=>{
    res.send('Coder statistics home');
});

app.use('/user/codeforces',codeforcesRouter);
app.use('/user/leetcode',leetcodeRouter);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})
