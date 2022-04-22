const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
    {
        title: { type: String, require: true },
        discription: { type: String, require: true },
        image: { type: Boolean, default: true },
    },
    {
        versionKey: false,
        timestamps: true
    }
);
const Post = mongoose.model("post", postSchema);
module.exports = Post;