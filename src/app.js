const express = require('express')

const app = express()
app.use("/test1",(req,res)=>{
    res.send("Hello node dev test route")
})
app.use("/sample",(req,res)=>{
    res.send('your on sample route')
})
app.listen(3000,()=>{
    console.log("successfully listing on port 3000");
})