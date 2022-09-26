const express = require('express');
const { title } = require('process');

const app = express();

app.use((req,res,next) => {
    res.setHeader("Acess-Control-Allow-Origin","*");
    res.setHeader("Acess-Control-Allow-Headers","Origin , X-Requested-With,Content-Type,Accept");
    res.setHeader("Acess-Control-Allow-Method","GET,POST,PATCH,DELETE,OPTIONS");
})

app.post("/post",(req,res,next)=> {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message:'post suceessfully'
    });
    
});


app.use("/post",(req , res , next) => {
    const posts =[
        {
            id : "sdfsdf0",
            title : "hello",
            content : "this is my hello"
        },
        {
            id : "sdfxvsdf0",
            title : "hello2",
            content : "this is my hello2"
        }
    ]
    res.status(200).json({
        message : "post creatte" ,
        posts:posts
    });
    next
}); 

module.exports = app;
