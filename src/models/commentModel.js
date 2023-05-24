const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postId: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
