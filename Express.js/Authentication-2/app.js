const express = require('express')
const app = express()
const userModel = require('./models/user');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/create', (req, res) => {
    let { username, password, email, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            // console.log(hash);
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age,
            })

            let token = jwt.sign({ email }, "shhhhhh");
            res.cookie("token", token);
            res.send(createdUser);
        })
    })
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });

    if (!user) return res.send("something went wrong...");

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: user.email }, "shhhhhh");
            res.cookie("token", token);
            res.send("yes, you can login");
        }
        else {
            res.send("something went wrong...");
        }
        // console.log(result); returns true as the credentials match
    })
    // console.log(user.password, req.body.password);
    // console.log(user);

});

app.get('/logout', (req, res) => {
    res.clearCookie("token", "");
    res.redirect('/');
})

app.listen(3000);