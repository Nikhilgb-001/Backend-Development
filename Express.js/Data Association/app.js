const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
    res.send('Hello...');
});

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: "Nikhil",
        age: 23,
        email: "nikhil@gmail",
    })
    res.send(user);
});

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdata: "Hello Nikhil",
        user: "6646292902380dacb7e3b3a2",
    });

    let user = await userModel.findOne({ _id: "6646292902380dacb7e3b3a2" });
    user.posts.push(post._id);
    await user.save();
    res.send({ post, user });
});


app.listen(3000);