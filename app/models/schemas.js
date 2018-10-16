const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    user: String,
    body: String,
    posted_at: Date
});

commentSchema.pre('save', function(next){
    if(this.isNew){
        this.posted_at = new Date();
    }

    next();
});

let postSchema = new Schema ({
    title: {type: String, required: "Title is required.", 
        minlength: [20, "Title is too short; must be at least 20 characters long."]},
    author: {type: String, required: true},
    summary:{type: String, required: true},
    posted_at: Date,
    updated_at: Date,
    body: {type: String, required: true},
    comments: [commentSchema]
})

postSchema.pre('save', function(next){
    if(this.isNew){
        this.posted_at = new Date();
        this.updated_at = new Date();
    }else{
        this.updated_at = new Date();
    }

    next();
});
module.exports.Post = mongoose.model("Post", postSchema);