const express = require('express')
const app = express();
const port = 3000

const userModel = require('./userModel');
const { name } = require('ejs');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: 'Jane',
        username: 'Jane Doe-1',
        email: 'Janelli@me.com'
    })
    res.send(createdUser);
})

app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({ username: 'Lalli' }, { name: "Jane Doe" }, { new: true });
    res.send(updatedUser);
})

app.get('/read', async (req, res) => {
    let users = await userModel.find({ username: "Jane Doe" });
    res.send(users);
})

app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({ username: "Jane Doe" });
    res.send(deletedUser);
})

app.listen(port);