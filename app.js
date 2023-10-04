const express = require("express")
const morgan = require("morgan")
const flash = require("connect-flash")
const session = require("express-session")

const carsRouter = require("./routes/carsRoutes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(express.static(`${__dirname}/public`))
app.set("views", __dirname + "/views")
app.set("view engine", "ejs")

app.use(
	session({
		secret: "binarcars",
		saveUninitialized: true,
		resave: true,
	})
)
app.use(flash())

app.use("/", carsRouter)

module.exports = app
