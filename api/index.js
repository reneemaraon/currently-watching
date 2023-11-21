require('dotenv').config() // to access environment variables
require('express-async-errors');

const express = require('express')
const app = express()

const passport = require('passport')
const passportSetup = require('./services/passport')
const session = require('express-session')
const cors = require("cors");

app.use(express.json())
// app.set("trust proxy", 1);

app.use(session({ secret: "secretcode",
resave: true,
saveUninitialized: true,
cookie: {
  sameSite: "Lax",
  secure: false,
  maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
} }))

app.use(
    cors({
      origin: "http://127.0.0.1:3000", // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true // allow session cookie from browser to pass through
    })
  );


app.use(passport.initialize())
app.use(passport.session())


const connectDB = require('./db/connect')

//routers
const authRouter = require('./routes/auth')
const showRouter = require('./routes/show')


//custom middlewares
const errorHandlerMiddleware = require('./middlewares/error_handler')

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/shows', showRouter)

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 4000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log('Successfully connected to DB.')
            console.log(`Server is listening in ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()