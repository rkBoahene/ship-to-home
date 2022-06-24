const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { config } = require('../../config/config')
const User = require('../models/user')
const ActiveSession = require('../models/activeSession')


function home(req, res){
    return res.send('home page')
}

function register(req,res){
    const {name,email, password} = req.body
    User.find
}

function login(req, res){
    const email = req.body.email
    const password = req.body.password

    User.findAll({
        email:email, 
    },(err, user)=>{
        if(err)throw err;

        if(!user) res.status(404).json({msg:'User does not exist'})

        bcrypt.compare(password,user.password, function(err, mathced){
            if (matched) {
                const token = jwt.sign(user, config.dev.secret,{expiresIn: 86400})
                let query = {userId: user.id, token:'JWT' + token}
                ActiveSession.create(query )
                return res.status(200).json({
                    success: true,
                    token: 'JWT' + token,
                    user
                })
            }else{
                return res.status(400).json({msg:'Invalid credentials'})
            }
        })


    })
}

function logout(req, res){
    const token = req.body.token
    ActiveSession.destroy({
        where:{
            token:token
        }
    },function(err,item){
        if(err) res.status(500).json({succes: false,msg:'could not log out'})
        res.status(200).json({succes:true,msg:'logged out'})
    })
}

module.exports = {login, logout, register, home}