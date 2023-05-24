const express = require("express");
const app = require("./app");
const logger = require("./helpers/logger.helpers");

async function startServer() {
  const expressApp = express();

  app({ app: expressApp });

  expressApp
    .listen(process.env.PORT, () => {
      console.log(` ################################################
      🪐  Server listening on port: ${process.env.PORT || 9000} 🪐
      ################################################`);
      logger.info(`Server started`);
    })
    .on("error", async (err) => {
      logger.error(err);
      await disconnectDB();
      process.exit(1);
    });
}

startServer()
  .then(() => {
    console.log("Server started...");
  })
  .catch((err) => {
    console.log(err);
  });

process.on("unhandledRejection", (reason, p) => {
  console.log(p, reason);
  logger.error("Unhandled Rejection at: Promise ", p, reason);
  // application specific logging, throwing an error, or other logic here
});

// const errorMiddleware = require("./middlewares/errorMiddleware");
// const commentsRoutes = require("./routes/commentsRoutes");
// const postsRoutes = require("./routes/postsRouter");

// const app = express();

// //Middlewares
// app.use(express.json());

// // Routes
// app.use("api/comments", commentsRoutes);
// app.use("api/posts", postsRoutes);

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Sever is running on port ${port}`);
// });
