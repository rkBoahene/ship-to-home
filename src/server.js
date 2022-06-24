const express = require('express')
const bodyParser = require('body-parser')
const dbcon = require('./database')
require("dotenv").config();
// user controller here
const user = require('./v0/routes/users')

const app = express()
const port = process.env.port || 3000

app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('will show some stats here')
})
app.use('/api/v0/', user)

const start = async() =>{
    try {
        await dbcon(process.env.MONGO_URI)
        console.log('dbconnection successful');
        app.listen(port, () => {
            console.log(`sever running on http://localhost:${port}`)
            // console.log("Database running", dbcon);
        })

    } catch (error) {
        console.log(error)
        
    }
}




start();