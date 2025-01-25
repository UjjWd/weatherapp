const express=require("express");
const app=express();
const PORT=8980;
app.get('/weather',(req,res)=>{
    res.sendFile("./index.html",{root:__dirname});
})









app.listen(PORT,(()=>{
    console.log(`SERVER Started at ${PORT}`);
}))