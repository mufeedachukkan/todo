const express=require('express')
const  register  = require('./services/register')
const login = require('./services/login')
const addEvent = require('./services/addEvent')
const cors=require('cors')
const app=express()

app.use(cors({
    origin:'http://localhost:4200'
}))
app.use(express.json())

app.post('/register', (req, res) => {
    register.register(req.body.userId, req.body.email, req.body.password, req.body.dob)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})
app.post('/login',(req,res)=>{
    console.log("login body", req.body)
    login.signIn(req.body.email,req.body.password)
        .then(result=>{
            console.log("result",result)
            res.status(result.statusCode).json(result)
        })
})
app.post('/addevent',(req,res)=>{
    addEvent.addEvent(req.body.email,req.body.name,req.body.date,req.body.priority)
        .then(result=>{
            console.log("result",result)
            res.status(result.statusCode).json(result)
        })

})
app.listen(3000,()=>{
    console.log("connected on 3000")
})