const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("App is working")
})

app.listen(3000,(err)=>{
 if(!err) console.log("App running on port:3000")  
})