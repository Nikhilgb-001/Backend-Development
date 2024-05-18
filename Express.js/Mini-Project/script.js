const express = require('express')
const app = express()
const path = require('path')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render('index');

})

app.get('/users/:username', (req, res) => {
    res.send(`Hello, ${req.params.username}`)
})

app.get('/users/:username/:age', (req, res) => {
    res.send(`Hello, ${req.params.username} of age ${req.params.age}`);
})

app.listen(3000, () => {
    console.log('app listening on port 3000!')
})