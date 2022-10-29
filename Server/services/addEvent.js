const dataBase = require('./dataBase')
const addEvent=(email,name,date,priority)=>{
    dataBase.User.findOne({email:email}).then(
        item=>{
            console.log("eventitem",item)
            item.events.push({name:name,date:date,priority:priority})
            item.save()
            return {
                statusCode: 200,
                status: true,
                message: "event added",
            }
        }
    )
}
module.exports={addEvent}