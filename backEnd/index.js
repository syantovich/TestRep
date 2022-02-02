const express=require("express");
const Mongoose=require("mongoose");
const Handlebars=require("express-handlebars");
const userSchema=require("./model/schems/user");
const homeRouts=require("./routs/home");
const regRouts=require("./routs/registration");

const app=express();

const hbs=Handlebars.create({
    defaultLayout:"main",
    extname:"hbs"
})

app.engine("hbs",hbs.engine)
app.set("view engine","hbs")
app.set("views","views")

app.use(express.static("public"))
app.use(express.urlencoded({
    extended:false
}))

app.use("/",homeRouts);
app.use("/registration",regRouts);

const PORT=process.env.PORT||3000
app.listen(PORT,(err)=>{
    console.log(`Server is running on port ${PORT}` );
})
