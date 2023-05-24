const commentService = require("../services/commentsService");

const getComments = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const comments = await commentService.getComments(limit);
    res.json(comments);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getComments,
};
