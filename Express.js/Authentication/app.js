const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express')
const app = express();

// cookie parser
app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie("name", "Nikhil");
    res.send("Done...");
})

//bcrypt
// app.get('/pass', (req, res) => {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash("LodaBC", salt, function (err, hash) {
//             console.log("Hash", hash);
//             console.log("Salt", salt);
//         });
//     });
// })

// app.get('/pass', (req, res) => {
//     bcrypt.compare("LodaBC", "$2b$10$P.CxcKYGQzUK6TD/AStjK.0iiRdXbYNsxCYOzT6OXSiXOJAiqh8fy", function (err, result) {
//         console.log(result);
//     });
// })

// JWT 
app.get('/pass', (req, res) => {
    let token = jwt.sign({ email: "nikhil@gmail.com" }, "secret");
    res.cookie("token", token);
    res.send("Done!");
    // console.log(token);
})
app.get('/readjwt', (req, res) => {
    console.log(req.cookies);
    // res.send("Hello...");
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})

// app.get('/read', (req, res) => {
//     console.log(req.cookies.token);
// })



app.listen(3000);