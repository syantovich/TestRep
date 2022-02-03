
const {Router}=require("express")
const express=require("express");
const mongoose = require("mongoose");
const userScheme = require("../model/schems/user");
const router=Router();
const User = mongoose.model("users", userScheme);
mongoose.connect("mongodb://localhost:27017/usersdb", {useUnifiedTopology: true, useNewUrlParser: true});
router.get("/",(req,res)=>{
    res.render("registration",{
        title:"Registration",
    })
})
 router.post("/",express.urlencoded({extended: false}),async (req,res)=>{
    await User.create(req.body, function (err, doc) {

         if (err) return res.send("false");
         res.send("true");
     });
})

module.exports = router