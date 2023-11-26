if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const corsOptions = {
    origin: "https://welovemoviesfrontend-02uq.onrender.com",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  };
  
  app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
