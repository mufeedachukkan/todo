const express=require('express')
const  register  = require('./services/register')
const login = require('./services/login')
const addEvent = require('./services/addEvent')
const getEvent=require('./services/getEvent')
const deleteEvent=require('./services/deleteEvent')
const getDeletedEvent=require('./services/getDeletedEvent')
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
    login.signIn(req.body.email,req.body.password)
        .then(result=>{
            res.status(result.statusCode).json(result)
        })
})
app.post('/addevent',(req,res)=>{
    addEvent.addEvent(req.body.email,req.body.name,req.body.date,req.body.priority)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.post('/getevent',(req,res)=>{
    getEvent.getEvent(req.body.email)
    .then(result=>{
        console.log("getEvent",result)
        res.status(result.statusCode).json(result)
    })
})
app.post('/getdeletedevent',(req,res)=>{
    getDeletedEvent.getDeletedEvent(req.body.email)
    .then(result=>{
        console.log("getEvent",result)
        res.status(result.statusCode).json(result)
    })
})
app.post('/deleteevent',(req,res)=>{
    deleteEvent.deleteEvent(req.body.email,req.body.name,req.body.date,req.body.priority)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.listen(3000,()=>{
    console.log("connected on 3000")
})