const dataBase = require('./dataBase')
const addEvent = (email, name, date, priority) => {
    return dataBase.Event.findOne({ email: email })
    .then(item => {
        if (item) {
            item.events.push({ name: name, date: date, priority: priority })
            item.save()
            return {
                statusCode: 200,
                status: true,
                message: "event added"
            }
        }
  
        else{
            const newEvent = new dataBase.Event({
                email: email,
                events:[{ name: name, date: date, priority: priority }]
            })
            newEvent.save()
            return {
                statusCode: 200,
                status: true,
                message: "event added"
            }
        }
        
    })
}

module.exports = { addEvent }