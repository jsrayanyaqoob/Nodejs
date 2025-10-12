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


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

app.get("/users", (res, req) =>{
    return res.json(users)
})