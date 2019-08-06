const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Listening on port 3000");
})

app.get('/A(pp)?le',(req,res) =>{
    res.send("Apple or Ale?");
})

app.get('/who+a+', (req,res)=>{
    res.send("I know, right?!");
})

app.get('/name/:firstname/:lastname', (req,res) =>{
    res.send(`Hello ${req.params.firstname} ${req.params.lastname}!`);
})

app.get('/word/:word',(req,res)=>{
    let y;
    for(let x in req.params.word)
    {
        y += x;
    }
    res.send(`${y}`);
})

app.get('*', (req,res)=>{
    res.send('No url path found');
})