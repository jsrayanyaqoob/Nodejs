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

// Using Node.js `require()`
const mongoose = require('mongoose');
const { default: Customer } = require('./schemas/customers')
const { default: Manager } = require('./schemas/manager')
const { default: shareHolders } = require('./schemas/shareHolders')
// import Customer from './schemas/customers'
mongoose.connect('mongodb://localhost:27017/store-management')
    .then(() => {
        console.log('Connected!')

        // shareHolders.create({
        // name: "Rayan", // String is shorthand for {type: String}
        // age: 14,
        // email: "rayan123@gmail.com",
        // address: {
        //     city: "Karachi",
        //     street: "Administration Society Block 8 KAECHS",
        //     postalCode: 76050
        // },
        // shares: {
        //     shares_holding: 4000,
        //     ownership_percentage: "1.8%",
        // },
        // phone_number: []
        // }).then(res => {
        //     console.log("The doc is created", res);
        // })




        // shareHolders.deleteMany({ phone_number: { $lte: [] } }).then(res => {
        //     console.log(res);
        // })


        // shareHolders.deleteMany({ name: "Rayan" }).then(res => {
        //     console.log(res);
        // })


        // shareHolders.updateOne({ shares: {shares_holding: 5500} }, { shares: {shares_holding: 6000, ownership_percentage: "2.2%" }}).then(res => {
        //     console.log(res); 
        // })





        // shareHolders.deleteMany({ name: "Rayan" }).then(res => {
        //     console.log(res);
        // })



        // shareHolders.insertMany([{
        //     name: "Rayan", // String is shorthand for {type: String}
        //     age: 14,
        //     email: "rayan123@gmail.com",
        //     address: {
        //         city: "Karachi",
        //         street: "Administration Society Block 8 KAECHS",
        //         postalCode: 76050
        //     },
        //     shares: {
        //         shares_holding: 4000,
        //         ownership_percentage: "1.8%",
        //     },
        //     phone_number: []
        // },
        // {
        //     name: "Ayesha",
        //     age: 15,
        //     email: "ayesha_khan@gmail.com",
        //     address: {
        //         city: "Lahore",
        //         street: "Model Town B Block",
        //         postalCode: 54000
        //     },
        //     shares: {
        //         shares_holding: 2500,
        //         ownership_percentage: "1.2%"
        //     },
        //     phone_number: ["03001234567"]
        // },
        // {
        //     name: "Ahmed",
        //     age: 16,
        //     email: "ahmed321@gmail.com",
        //     address: {
        //         city: "Islamabad",
        //         street: "G-11 Markaz",
        //         postalCode: 44000
        //     },
        //     shares: {
        //         shares_holding: 5000,
        //         ownership_percentage: "2.5%"
        //     },
        //     phone_number: ["03121234567"]
        // },
        // {
        //     name: "Fatima",
        //     age: 14,
        //     email: "fatima_001@gmail.com",
        //     address: {
        //         city: "Quetta",
        //         street: "Satellite Town",
        //         postalCode: 87300
        //     },
        //     shares: {
        //         shares_holding: 1500,
        //         ownership_percentage: "0.7%"
        //     },
        //     phone_number: []
        // },
        // {
        //     name: "Bilal",
        //     age: 17,
        //     email: "bilal987@gmail.com",
        //     address: {
        //         city: "Peshawar",
        //         street: "University Road",
        //         postalCode: 25000
        //     },
        //     shares: {
        //         shares_holding: 3000,
        //         ownership_percentage: "1.3%"
        //     },
        //     phone_number: ["03211234567"]
        // },
        // {
        //     name: "Hira",
        //     age: 15,
        //     email: "hira_rocks@gmail.com",
        //     address: {
        //         city: "Multan",
        //         street: "Gulgasht Colony",
        //         postalCode: 60000
        //     },
        //     shares: {
        //         shares_holding: 2700,
        //         ownership_percentage: "1.1%"
        //     },
        //     phone_number: ["03331234567"]
        // },
        // {
        //     name: "Usman",
        //     age: 16,
        //     email: "usman.cool@gmail.com",
        //     address: {
        //         city: "Hyderabad",
        //         street: "Qasimabad",
        //         postalCode: 71000
        //     },
        //     shares: {
        //         shares_holding: 8000,
        //         ownership_percentage: "3.5%"
        //     },
        //     phone_number: []
        // },
        // {
        //     name: "Zainab",
        //     age: 14,
        //     email: "zainab_star@gmail.com",
        //     address: {
        //         city: "Faisalabad",
        //         street: "Jinnah Colony",
        //         postalCode: 38000
        //     },
        //     shares: {
        //         shares_holding: 1200,
        //         ownership_percentage: "0.5%"
        //     },
        //     phone_number: ["03451234567"]
        // },
        // {
        //     name: "Hamza",
        //     age: 15,
        //     email: "hamza_123@gmail.com",
        //     address: {
        //         city: "Rawalpindi",
        //         street: "Saddar",
        //         postalCode: 46000
        //     },
        //     shares: {
        //         shares_holding: 4500,
        //         ownership_percentage: "2.0%"
        //     },
        //     phone_number: []
        // },
        // {
        //     name: "Sara",
        //     age: 16,
        //     email: "sara789@gmail.com",
        //     address: {
        //         city: "Sialkot",
        //         street: "Cantt Area",
        //         postalCode: 51310
        //     },
        //     shares: {
        //         shares_holding: 2200,
        //         ownership_percentage: "0.9%"
        //     },
        //     phone_number: ["03001239876"]
        // }
        // ]).then(res => {
        //     console.log("All doc created", res);
        // })



        // shareHolders.find({ age: { $gt: 14 } }).then(res => {
        //     console.log(res);   
        // })


        // WRONG WAY (You will have to define and tell about ownership percentage too in this one)

        // shareHolders.find({ shares: { shares_holders: { $gt: 1500 } }}).then(res => {
        //     console.log(res);
        // })



        // RIGHT WAY

        // shareHolders.find({ "shares.shares_holding": { $gt: 1500 } }).then(res => {
        //     console.log(res);
        // })


        // shareHolders.updateMany({ "shares.shares_holding": { $lt: 3000 } }, { "shares.shares_holding": 8500 }).then(res => {
        //     console.log(res);
        // })



        const words = []
        const filteredWords = shareHolders.filter(name => name.startsWith(startingLetter));
        
        shareHolders.updateMany({ name: { filteredWords } }, { "shares.shares_holding": 10000 }).then(res => {
            console.log(res);
        })












        // Manager.create({
        //     name: "Rayan",
        //     age: 28,
        //     address: "Karachi",
        //     salary: 10000,
        //     phone_number: [9210312821]
        // })
        // Manager.create({
        //     name: "Buchra",
        //     age: 28,
        //     address: "Karachi",
        //     salary: 20000,
        //     phone_number: [9202390429]
        // })
        // Manager.create({
        //     name: "Nemo",
        //     age: 28,
        //     address: "Karachi",
        //     salary: 40000,
        //     phone_number: [9232493820]
        // })
        // Manager.create({
        //     name: "Ammar",
        //     age: 28,
        //     address: "Karachi",
        //     salary: 45000,
        //     phone_number: [9232712821]
        // })
        // Manager.create({
        //     name: "Shamim",
        //     age: 28,
        //     address: "Karachi",
        //     salary: 50000,
        //     phone_number: [9231232821]
        // })
        // Manager.create({
        //     name: "Yasir Ahmed",
        //     age: 28,
        //     address: "Karachi",
        //     salary: 50000,
        //     phone_number: [92132422821]
        // })


        // Manager.find({ salary: { $gt: 9000 } }).then(res => { 
        //     console.log(res);
        // })


        // Manager.deleteMany({ salary: { $lt: 35000 } }).then(res => {
        //     console.log(res);
        // })

        // Manager.updateMany({ salary: { $lte: 50000 }}, { salary: 25000 }).then(res => {
        //     console.log(res);
        // })







        // Customer.create({
        //     name: "Rayan",
        //     age: 14,
        //     address: "House 152, KARCHS",
        //     phone_number: ["92310123123"]
        // }).then(res => {
        //     console.log('created a doc', res)
        // })
        // Customer.find({ name: "Rayan"}).then(res => {
        //     console.log('Found a record', res)
        // })

        // Customer.updateOne({ name: "Najeeb" }).then(res => {
        //     console.log("Updated", res);
        // })







        // Customer.updateOne({ name:'Najeeb' }, { age: 10, address: "manzoor colony" }).then(res => {
        //     console.log("Update one done", res);  
        // })

        // Customer.find({ age: { $gt: 14 } }).then(res => {
        //     console.log(res);
        // })

        // Customer.deleteMany({ age: { $gte: 14 } }).then(res => {
        //     console.log(res);
        // })





        //    Customer.create({
        //     name: "Zuhair",
        //     age: 25,
        //     address: "Karachi",
        //     phone_number: ["943534095"]
        // }).then(res => {
        //     console.log('created a doc', res)
        // })
        // Customer.create({
        //     name: "Hamza",
        //     age: 21,
        //     address: "Karachi",
        //     phone_number: ["943534095"]
        // }).then(res => {
        //     console.log('created a doc', res)
        // })
        // Customer.create({
        //     name: "Hassan",
        //     age: 14,
        //     address: "Lahore",
        //     phone_number: ["943534095"]
        // }).then(res => {
        //     console.log('created a doc', res)
        // })
        // Customer.create({
        //     name: "Abdullah",
        //     age: 20,
        //     address: "Karachi",
        //     phone_number: ["943534095"]
        // }).then(res => {
        //     console.log('created a doc', res)
        // })
        // Customer.create({
        //     name: "Saleem",
        //     age: 18,
        //     address: "Karachi",
        //     phone_number: [92213421900]
        // }).then(res => {
        //     console.log(res);        
        // })
        // Customer.create({
        //     name: "Musab",
        //     age: 12,
        //     address: "Karachi",
        //     phone_number: [9221332900]
        // }).then(res => {
        //     console.log(res);        
        // })
        // Customer.create({
        //     name: "Jasir",
        //     age: 6,
        //     address: "Lahore",
        //     phone_number: [92324454900]
        // }).then(res => {
        //     console.log(res);        
        // })
        // Customer.create({
        //     name: "Yash",
        //     age: 19,
        //     address: "Multan",
        //     phone_number: [92290435232]
        // }).then(res => {
        //     console.log(res);        
        // })
        // Customer.create({
        //     name: "Khizer",
        //     age: 4,
        //     address: "Karachi",
        //     phone_number: [92230240909]
        // }).then(res => {
        //     console.log(res);        
        // })
        // Customer.create({
        //     name: "Yasir",
        //     age: 36,
        //     address: "Karachi",
        //     phone_number: [92012390213]
        // }).then(res => {
        //     console.log(res);        
        // })









        // Customer.find({address: 'Karachi'}).then(res => {
        //     console.log(res);  
        // })



        // Customer.deleteMany({age: { $gt: 1 } }).then(res => {
        //     console.log(res);
        // })


        // Customer.find({address: "Lahore"}).then(res => {
        //     console.log(res);
        // })

        // Customer.find({address: ["Lahore", "Multan"] }).then(res => {
        //     console.log(res);
        // })


        // Customer.updateMany({address: "Karachi"}, { address: "Lahore", age: 18 }).then(res => {
        //     console.log(res);

        // })
    });


// Render all user through map (Practice)

// app.get('/users', (req, res) => {
//     const html = `
//         <ul>
//             ${users.map((users) => `<li>${users.first_name}</li>`).join('')}
//         </ul>
//     `

//     res.send(html)
// })

// GET all user (Practice Express)

// app.get("/api/users", (req, res) => {
//     return res.json(users)
// });


// GET user from ID (Practice Express)

app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
})

// DELETE delete the user (Practice)

app.get('/users/:id', (req, res) => {

    const html = `
        <h1>User List</h1>
        <ul>${users.map(users =>
        `
                <li>${users.first_name}</li> 
                <button class="deleteBtn" data-id="${users.id}">Delete</button>
            `).join("")}
        </ul>
    `


    return res.send(html)
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})
