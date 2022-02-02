<<<<<<< HEAD
const {Router}=require("express")

const router=Router();

router.post("/",(req,res)=>{
    res.render("index",{
        title:"Log in",
        isHome:true,
    })
})
=======
const {Router}=require("express")

const router=Router();

router.post("/",(req,res)=>{
    res.render("index",{
        title:"Log in",
        isHome:true
    })
})
>>>>>>> 8fbba4c2641bba6af4bf4bde0d98efd2972fbf93
module.exports = router;