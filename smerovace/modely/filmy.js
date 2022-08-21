const mongoose = require('mongoose')
const schema_filmu = new mongoose.Schema({
    nazev_filmu: {
        type: String,
        required: true
    },
    reziser: {
        type: String,
        required: false
    },
    popis: {
        type: String,
        required: false
    },
    rok_vydani: {
        type: String,
        required: false
    },
    datum_vytvoreni: {
        type: String,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("Film", schema_filmu)