const dataBase = require('./dataBase')
const jwt = require('jsonwebtoken')
const register = (userId, email, password, dob) => {
    return dataBase.User.findOne({ email: email }).then(user => {
        if (user) {
            return {
                statusCode: 422,
                status: false,
                message: "email id already exist"
            }
        }
        else {
            const newUser = new dataBase.User({
                userId: userId,
                email: email,
                password: password,
                DOB: dob,
            })
            newUser.save()
            const token = jwt.sign({
                email: email
            }, 'supersecretkey@123')
            return {
                statusCode: 200,
                status: true,
                message: "registered successfully",
                token,
                email
            }
        }
    })
}
module.exports = { register }