require("dotenv").config(); // to access environment variables
require("express-async-errors");

const express = require("express");
const MongoStore = require("connect-mongo");
const app = express();

const passport = require("passport");
const passportSetup = require("./services/passport");
const session = require("express-session");
const cors = require("cors");

app.use(express.json());
// app.set("trust proxy", 1);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: {
      sameSite: "Lax",
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
    },
  })
);

app.use(
  cors({
    origin: process.env.CLIENT_HOME_PAGE_URL, // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);

app.use(passport.initialize());
app.use(passport.session());

const connectDB = require("./db/connect");

//routers
const authRouter = require("./routes/auth");
const showRouter = require("./routes/show");
const reviewRouter = require("./routes/review");

//custom middlewares
const errorHandlerMiddleware = require("./middlewares/error_handler");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/shows", showRouter);
app.use("/api/v1/reviews", reviewRouter);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Successfully connected to DB.");
      console.log(`Server is listening in ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
