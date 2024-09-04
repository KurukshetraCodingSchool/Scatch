const express = require('express')
const router = express.Router();
const userModel = require("../models/user-model")
const bcrypt = require("bcrypt")

router.get("/", function(req,res){
    res.send("hello it's working ");
})
router.post("/register",function(req,res){
   try{
    let {email , password , fullname } = req.body;

    bcrypt.genSalt(10,function(err, slat){
      bcrypt.hash(password,slat, async function(err,hash){
        if (err ) return res.send(err.message);
        else{
          let user = await userModel.craete({
            email,
            password: hash ,
            fullname,
          });
          res.send(user);
         }
        
      })
    })
  }
    
   catch(err){
    console.log(err.message);
   }
})

module.exports = router;