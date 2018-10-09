const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    user: String,
    body: String,
    posted_at: Date
});

let postSchema = new Schema ({
    title: String,
    author: String,
    summary:String,
    posted_at: Date,
    body: String,
    comments: [commentSchema]
})

module.exports.Post = mongoose.model("Post", postSchema);