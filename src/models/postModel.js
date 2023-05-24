const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: Number,
    required: true,
  },
  body: {
    type: Number,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

model.exports = Post;
