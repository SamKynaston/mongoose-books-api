const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    displayID:{type:String, required:true},
    title:{type:String, required:true},
    author:{type:String, required:true},
    genre:{type:String, required:true}
})

const bookModel = mongoose.model('books', bookSchema)
module.exports.model = bookModel