// console.log("it's running weweewe");

const express = require("express");
const { title } = require("process");

const app = express();

console.log("in app.js");

// app.use((req,res,next) => {
//     res.setHeader("Acess-Control-Allow-Origin","*");
//     res.setHeader("Acess-Control-Allow-Headers","Origin , X-Requested-With,Content-Type,Accept");
//     res.setHeader("Acess-Control-Allow-Method","GET,POST,PATCH,DELETE,OPTIONS");
//     next();
// })

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// // app.get('/getHello', (req, res) => res.send('Hello World!'));
// app.use("/getHello",(req , res) => {
//     res.send("hello");
//     res.end();

// });

app.post("/api/post",(req,res,next)=> {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message:'post suceessfully'
    });

});

// app.use("/post",(req , res , next) => {
//     const posts =[
//         {
//             id : "sdfsdf0",
//             title : "hello",
//             content : "this is my hello"
//         },
//         {
//             id : "sdfxvsdf0",
//             title : "hello2",
//             content : "this is my hello2"
//         }
//     ]
//     res.status(200).json({
//         message : "post creatte" ,
//         posts:posts
//     });
//     next();
// });

// app.get("/api/posts", (req, res, next) => {
//   const posts = [
//     {
//       id: "fadf12421l",
//       title: "First server-side post",
//       content: "This is coming from the server",
//     },
//     {
//       id: "ksajflaj132",
//       title: "Second server-side post",
//       content: "This is coming from the server!",
//     },
//   ];
//   res.status(200).json({
//     message: "Posts fetched successfully!",
//     posts: posts,
//   });
// });
app.get("/api/posts", (req, res, next) => {
    const posts = [
      {
        id: "fadf12421l",
        title: "First server-side post",
        content: "This is coming from the server"
      },
      {
        id: "ksajflaj132",
        title: "Second server-side post",
        content: "This is coming from the server!"
      },
      {
        id: "ksajflaj132",
        title: "third server-side post",
        content: "This is coming from the server!"
      }
    ];
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: posts
    });
  });

// app.listen(3000, () => console.log('Example app listening on port 3000!'));
module.exports = app;

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(3000, () => console.log('Example app listening on port 3000!'));
