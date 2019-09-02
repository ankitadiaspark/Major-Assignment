mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/college")

con = mongoose.connection

module.exports = con