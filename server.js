//Imports
require("dotenv").config()
const express = require("express")
const app = express()

//Routes
const bookRoutes = require("./routes/books.routes").router

//Database
const db = require("./services/mongoose").db
db() //Start the Database

//Middleware
app.use(require("body-parser").json())

//Route Configuration
app.use('/books', bookRoutes)

app.listen(process.env.PORT, () => {
    console.log(`[LISTENING] localhost:${process.env.PORT}`);
})
