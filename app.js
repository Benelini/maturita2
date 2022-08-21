//import
require("dotenv").config()                      //načítání z .env souboru
const express = require ("express")             //konstanta pro použití frameworku
const mongoose = require ("mongoose")           //konstanta pro databázi
const session = require ("express-session")     //konstanta pro přístup k datům klienta


const app = express()                           //konstanta app pro použití frameworku
const PORT = process.env.PORT  
const DB_URI = process.env.DB_URI                 

//mongoose DB
mongoose.connect(DB_URI)
const db = mongoose.connection
db.on("error", (error) => console.log(error))
db.once("open", (error) => console.log(`připojen do databáze ${DB_URI}`))

//middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(session({secret: "klíč", saveUninitialized: true, resave: false}))
app.use((req, res, next) => { res.locals.message = req.session.message; delete req.session.message; next()})
app.use("", require('./smerovace/smerovace'))

//ejs - generování html
app.set("view engine", "ejs")

//
app.listen(PORT, () => {console.log(`express: poslouchám na http://localhost:${PORT}`)})