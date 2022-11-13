import express from 'express';
const app = express();
const PORT = "3333"
app.get("/",(req,res)=>{
  res.json({message:"hello world"})
})
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`)
)