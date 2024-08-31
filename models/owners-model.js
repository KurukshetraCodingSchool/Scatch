const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
    fullname : {
      type:  String,
      minLength : 3,
      trim:true,
    },
    emial : String,
    password: String,
    
    product : {
        type :Array,
        default :[]
    },
   picture : String,
   gstin : String,

})

module.exports =  mongoose.model("onwer",ownerSchema)