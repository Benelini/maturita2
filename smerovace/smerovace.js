const express = require('express');
const smerovac = express.Router()
const Film = require('./modely/filmy')
smerovac.use(express.static('./zdroje'));

//stranky
smerovac.get("/", (req,res) => {res.render("index",{title: "Dbfilmu"})})
smerovac.get("/onas", (req,res) => {res.render("onas",{title: "Dbfilmu"})})
smerovac.get("/kontakt", (req,res) => {res.render("kontakt",{title: "Dbfilmu"})})
smerovac.get("/novyfilm", (req,res) => {res.render("novy_film",{title: "Nový film"})})

//DB akce
smerovac.post('/novyfilm', (req,res) => {const film = new Film({
    nazev_filmu:    req.body.nazev_filmu,
    reziser:        req.body.reziser,
    popis:          req.body.popis,
    rok_vydani:     req.body.rok_vydani})
    film.save((err) => {
        if(err) {res.json(              {message: err.message,              type: 'něco se zvrtlo'})}
        else    {req.session.message =  {message: 'Film byl přidán!',    type: 'jo funguje to'}
                res.redirect("/seznam")
                }
})
})

smerovac.get('/seznam', (req,res) => {
    Film.find().exec((err, filmy) => {
            if(err) {res.json({message: err.message});
        }   else    {res.render("seznam", {title: 'DB Filmu', zaznam: filmy})}
        })
})

smerovac.get('/delete/:_id', (req,res)  => {
    let id = req.params;
    Film.findByIdAndRemove(id, (err)  => {
        if(err)     {res.json({message: err.message})
        } else      {req.session.message - {type: 'smazáno', message: "Film smazán."}
        res.redirect("/seznam")
        }
    })
})

module.exports = smerovac
