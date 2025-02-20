
import express, { response } from 'express' 

const app =express()
const port = 5000

app.use(express.json())

let users=[]
app.get('/',(req,res)=>{
    res.send("Hello user")
})
app.get("/users",(req,res)=>{
    res.send(users)
})

app.post('/user',(req,res)=>{
       users.push(req.body)
    res.send(users)
      
})



app.listen(port,()=>{
     console.log(`server is running.. at ${port} `);
     
})


