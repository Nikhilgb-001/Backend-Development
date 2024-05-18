const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

var users = [{
    name: "Jhon",
    kidneys: [{
        healthy: false,
    }]
}]

app.get('/', (req, res) => {

    const jhonKidneys = users[0].kidneys;
    const numberOfKidenys = jhonKidneys.length;

    let numberOfHealthyKidenys = 0

    for (let i = 0; i < jhonKidneys.length; i++) {
        if (jhonKidneys[i].healthy) {
            numberOfHealthyKidenys = numberOfHealthyKidenys + 1
        }
    }

    const numberOfhUnhealthyKidenys = numberOfKidenys - numberOfHealthyKidenys;


    res.json({
        numberOfKidenys,
        numberOfHealthyKidenys,
        numberOfhUnhealthyKidenys
    })
})

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        message: "kidney is added"
    })
})

app.put('/', (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true
    }
    res.json({})
})

app.delete('/', (req, res) => {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
        users[0].kidneys = newKidneys
        res.json({ msg: "deleted" })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})