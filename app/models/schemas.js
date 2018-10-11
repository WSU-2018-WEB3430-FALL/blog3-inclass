const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    user: String,
    body: String,
    posted_at: Date
});

let postSchema = new Schema ({
    title: {type: String, required: true, minlength: 20},
    author: {type: String, required: true},
    summary:{type: String, required: true},
    posted_at: Date,
    body: {type: String, required: true},
    comments: [commentSchema]
})

module.exports.Post = mongoose.model("Post", postSchema);