const dataBase = require('./dataBase')
const addDelete =(email, name, date, priority)=>{
    console.log("trash")
    return dataBase.Trash.findOne({ email: email })
    .then(item => {
        if (item) {
            item.events.push({ name: name, date: date, priority: priority })
            item.save()
            // return {
            //     statusCode: 200,
            //     status: true,
            //     message: "event added"
            // }
        }
        else{
            const newTrash = new dataBase.Trash({
                email: email,
                events:[{ name: name, date: date, priority: priority }]
            })
            newTrash.save()
            // return {
            //     statusCode: 200,
            //     status: true,
            //     message: "event added"
            // }
        }
        
    })}
const deleteEvent = (email,name,date,priority) => {
    return dataBase.Event.updateOne({email},{$pull:{"events":{ name,date,priority}}})
    .then(item => {
        if (item) {
             addDelete(email,name,date,priority)
            return {
                statusCode: 200,
                status: true,
                message: "item deleted",
                item
            }
        }

    })
}


module.exports = { deleteEvent }