const express = require("express");
const app = require("./app");
const logger = require("./helpers/logger.helpers");
const dotenv = require("dotenv");

dotenv.config();
async function startServer() {
  const expressApp = express();

  app({ app: expressApp });

  expressApp
    .listen(process.env.PORT || 8000, () => {
      console.log(` ################################################
      🪐  Server listening on port: ${process.env.PORT || 9000} 🪐
      ################################################`);
      logger.info(`Server started`);
    })
    .on("error", async (err) => {
      logger.error(err);
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
