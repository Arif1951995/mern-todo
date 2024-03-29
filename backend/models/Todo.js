const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: false
    }
},{timestamps: true})



module.exports = mongoose.model("Todo", TodoSchema);