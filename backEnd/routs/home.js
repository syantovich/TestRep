<<<<<<< HEAD
const {Router}=require("express")

const router=Router();

router.get("/",(req,res)=>{
    res.render("index",{
        title:"Main page",
        isHome:true
    })
})
=======
const {Router}=require("express")

const router=Router();

router.get("/",(req,res)=>{
    res.render("index",{
        title:"Main page",
        isHome:true
    })
})
>>>>>>> 8fbba4c2641bba6af4bf4bde0d98efd2972fbf93
module.exports = router;