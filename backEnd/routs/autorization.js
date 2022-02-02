const {Router}=require("express")

const router=Router();

router.post("/",(req,res)=>{
    res.render("index",{
        title:"Log in",
        isHome:true,
    })
})
module.exports = router;