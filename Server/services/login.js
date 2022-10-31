const dataBase = require('./dataBase')
const jwt = require('jsonwebtoken')
const signIn=(email,password)=>{
    return dataBase.User.findOne({email:email,password:password})
    .then(item=>{
        console.log("item",item)
        if(item){
            const token = jwt.sign({
                email: email
            }, 'supersecretkey@123')
            return {
                statusCode: 200,
                status: true,
                message: "login successfully",
                token,
                email
            }
        }
        else {
            return {
                statusCode: 422,
                status: false,
                message: "invalid email or password"
            }
        }
    })
}
module.exports={signIn}