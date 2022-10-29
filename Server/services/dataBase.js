const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/Remainder', { useNewUrlParser: true });
const User = mongoose.model('User', {
    userId: String,
    email:String,
    password: String,
    DOB: String,
    events:Array,
    deletedEvents:Array
})
module.exports = { User }