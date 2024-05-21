const express = require('express');
const app = express();

app.use(express.json());

// Middleware

// let numberOfRequests = 0;
// function incriment(req, res, next) {
//     numberOfRequests++;
//     console.log(numberOfRequests);
//     next();
// }

// app.use(incriment);
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/read', (req, res) => {
//     res.send('Hello World Read Page!')
// })

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;
    res.send("you have " + kidneysLength + " kidneys");
})

app.listen(3000);