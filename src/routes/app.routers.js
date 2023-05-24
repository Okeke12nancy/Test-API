const commentRouter = require("./commentsRoutes");
const postRouter = require("./postsRouter");

const basePath = "/api/v1";

const path = (app) => {
  app.use(`${basePath}/posts`, postRouter);
  app.use(`${basePath}/comments`, commentRouter);
};

module.exports = path;
