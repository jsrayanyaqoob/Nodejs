// const randomNum = Math.ceil(Math.random() * 1 * 10 )
// console.log(randomNum)


// const rayan = require("./second")
// console.log(rayan.isDeveloper)


// const express = require('express')
// const app = express()
// const port = 3000
// const path = require('path')

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,"home.html"))
// })

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname,"contact.html"))
// })

// app.get('/service', (req, res) => {
//     res.send('<h1>Hello World</h1>')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })














const users = require('./MOCK_DATA.json')
const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

// Render all user through map (Practice)

app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((users) => `<li>${users.first_name}</li>`).join('')}
        </ul>
    `

    res.send(html)
})

// GET all user (Practice Express)

app.get("/api/users", (req, res) =>{
    return res.json(users)
});

// GET user from ID (Practice Express)

app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})
