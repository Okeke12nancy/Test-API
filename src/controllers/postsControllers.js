const postsService = require("../services/postsService");

const getPosts = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const posts = await postsService.getPosts(limit);
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPosts,
};
