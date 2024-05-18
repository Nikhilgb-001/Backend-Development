const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// middleware 
app.use((req, res, next) => {
    console.log("Hi I'm Middleware");
    next();
})

// routes
app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/contact', (req, res) => {
    res.send('Contact Page')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})