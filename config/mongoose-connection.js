const mongoose = require('mongoose');
const dbgr  = require("debug")("development:mongoose")
const config = require("config")
mongoose.
connect(`${config.get("MONGODB_URL")}/scatch`)
.then(function(){
    dbgr("Connected to MongoDB");
})
.catch(function(err){
   dbgr("Connection error:", err);
});

module.exports = mongoose.connection;
