//Imports
require("dotenv").config()
const express = require("express")
const app = express()

//Database
const db = require("./services/mongoose").db
db() //Start the Database

app.listen(process.env.PORT, () => {
    console.log(`[LISTENING] localhost:${process.env.PORT}`);
})
