
import express from 'express'

const app =express()
const port = 5000


app.get('/',(req,res)=>{
    res.send("Hello user")
})
app.get('/users',(req,res)=>{
    res.send("Hello all users")
})
app.get('/users',(req,res)=>{
    res.send("Hello all users")
})

app.listen(port,()=>{
     console.log(`server is running.. at ${port} `);
     
})


