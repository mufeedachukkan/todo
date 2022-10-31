const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/Remainder', { useNewUrlParser: true });
const User = mongoose.model('User', {
    userId: String,
    email:String,
    password: String,
    DOB: String,
})
const Event=mongoose.model('Event',{
    email:String,
    events:Array
})
const Trash=mongoose.model('Trash',{
    email:String,
    events:Array
}) 
module.exports = { User, Event ,Trash}