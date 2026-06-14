const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({

    title: String,

    content: String,

    coverImage: String,

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]

}, {
    timestamps: true
});

module.exports = mongoose.model("Blog", blogSchema);