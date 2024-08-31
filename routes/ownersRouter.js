const express = require('express')
const router = express.Router();
const ownerModel = require("../models/owners-model");

if(process.env.NODE_ENV === "development"){
    router.post("/create", async function(req,res){
    let owners = await ownerModel.find()
    if(owners.length>0) {
        return res
        .send(503)
        .send("you dont have permission to create a new owner .")
    }

    
    let { fullname , email , password} = req.body;
    let createdModel = await ownerModel.create({
          fullname,
          email ,
          password,      
    });
    res.status(201).send("craetedOwner:")

    });
}




router.get("/", function(req,res){
    res.send("hello it's working ");
});



module.exports = router;