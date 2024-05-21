const express = require('express');
const zod = require('zod');
const app = express();

app.use(express.json());

// const schema = zod.array(zod.number());

function validateSchema(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
        age: zod.number()
    })

    const response = schema.safeParse(obj)
    console.log(response);
    return response;
}

// validateSchema({
//     email: "nikhilgb3113@gmail.com",
//     password: "nikhilgb3113",
//     age: 23
// })

// app.post('/kidney-check', (req, res) => {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     if (!response.success) {
//         res.send("wrong credientials...")
//     }
//     else {
//         res.send({
//             response
//         })
//     }
// });


app.post('/login', (req, res) => {
    const response = validateSchema(req.body)
    if (!response.success) {
        res.json({
            msg: "Invalid inputs..."
        })
    }
    else {
        res.send({
            response
        })
    }
})


app.listen(3000)