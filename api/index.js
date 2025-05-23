require("dotenv").config(); // to access environment variables
require("express-async-errors");
const { ApolloServer } = require("@apollo/server");
const gql = require("graphql-tag");
const { buildSubgraphSchema } = require("@apollo/subgraph");
const { expressMiddleware } = require("@apollo/server/express4");
const resolvers = require("./resolvers");
const { readFileSync } = require("fs");

const express = require("express");
const MongoStore = require("connect-mongo");
const app = express();

const passport = require("passport");
const passportSetup = require("./services/passport");
const session = require("express-session");
const cors = require("cors");

app.use(express.json());
app.set("trust proxy", 1);

const typeDefs = gql(
  readFileSync("schema.graphql", {
    encoding: "utf-8",
  })
);

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: {
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // Use 'None' for cross-origin in production
      secure: process.env.NODE_ENV === "production",
      domain:
        process.env.NODE_ENV === "production"
          ? ".currently-watching.live"
          : null,
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
const errorHandlerMiddleware = require("./middlewares/errorHandler");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/shows", showRouter);
app.use("/api/v1/reviews", reviewRouter);

// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers,
  }),
});

const apollo_start = async () => {
  await server.start();
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }) => ({ user: req.user }),
    })
  );
};
apollo_start();

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
