const express = require('express')
const app = express()
const port = 3000

function sumcalc(n) {
    let ans = 0
    for (let i = 0; i < n; i++) {
        ans = ans + i
    }
    return ans;
}


app.get('/', (req, res) => {
    let n = req.query.n
    const sum = sumcalc(n)
    res.send('Hello the sum is ' + sum)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})