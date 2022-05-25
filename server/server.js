const express =require("express")
const app =express();
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.json("test")
})
// app.get("/api/users/:id/update",(req,res)=>{
//   res.json("tsetsetwerwerwer")
// })
app.post("/api/users/:id/update",(req,res)=>{
    setTimeout(()=>{
        res.send(req.body)
    },[2000])
})
app.listen(8800,()=>{
    console.log("backend server is running")
})