const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const dbcon = require('./database')

// user controller here
const userController = require('./v0/controllers/users')



(async()=>{
    await dbcon.addModels(models)
    await dbcon.sync()
    
    const app = express()
    const port = process.env.port || 3000

    app.use(bodyParser.json());

    app.use('/api/v0/',userController)
    app.get('/', (req, res)=>{
        res.send('will show some stats here')
    })
    
    app.listen(port, ()=>{
        console.log(`sever running on http://localhost:${port}`)
        console.log("Database running", dbcon);
    })

})();

