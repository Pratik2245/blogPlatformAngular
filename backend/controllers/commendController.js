const Comment = require("../models/Comment")

const Blog = require('../models/Blog')

exports.addComment = async (req, res) => {
    try {
        const { blogId, text } = req.body();
        const blog = Blog.findById(blogId);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        const comment = await Comment.create({
            blogId,
            user: req.user.id,
            text,
        });
        req.status(200).json(comment);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


exports.getComments = async (req, res) => {
    try {
        const comment = Comment.findById({
            blog: req.params.blogId
        }).populate(
            "user",
            "username profileImage"
        )
            .sort({
                createdAt: -1
            });

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
exports.deleteComment = async () => {
    try {
        const comment = Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({
                message:
                    "Comment not found"
            });
        }
        if (
            comment.user.toString()
            !== req.user.id
        ) {

            return res.status(403).json({
                message:
                    "Not authorized"
            });

        }
        await comment.deleteOne();
        res.status(200).json({
            message:
                "Comment deleted"
        });
    } catch (error) {
        res.status(500).json({
            message:
                error.message
        });
    }
};
