const dataBase = require('./dataBase')
const getDeletedEvent = (email) => {
    return dataBase.Trash.findOne({ email: email })
    .then(item => {
        if (item) {
            return {
                statusCode: 200,
                status: true,
                message: "event found",
                item
            }
        }
        else{
            return {
                statusCode: 422,
                status: false,
                message: "no events"
            }
        }
        
    })
}

module.exports = { getDeletedEvent }