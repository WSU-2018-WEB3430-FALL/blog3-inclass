const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let postSchema = new Schema ({
    title: String,
    author: String,
    summary:String,
    posted_at: Date,
    body: String
})

module.exports.Post = mongoose.model("Post", postSchema);