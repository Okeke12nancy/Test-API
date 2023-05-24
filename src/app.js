const express = require("express");
const cors = require("cors");
const appRoutes = require("./routes/app.routers");
const errorMiddleware = require("./middlewares/errorMiddleware");

const APPS = ({ app }) => {
  app.use(express.urlencoded({ extended: false }));
  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */
  app.get("/", (req, res) => {
    res.json({ message: "Great!", error: false });
  });

  app.get("/health-check", (req, res) => {
    return res.status(200).json({ message: "All good here 😁" });
  });

  app.use(cors());

  // Transforms the raw string of req.body into json
  app.use(express.json());

  appRoutes(app);

  //Error handling middleware
  app.use(errorMiddleware);

  /// catch 404 and forward to error handler
  app.use("*", (req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    res.status(404).json({
      message: "Not Found",
      error: true,
    });
    next();
  });
};

module.exports = APPS;
