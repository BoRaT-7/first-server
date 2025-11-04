const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("✅ Express server is running successfully yes!");
});

const PORT = 5000;

const user = [
  {id:1, name:'Sabana',email:'sabana@gmail.com'},
  {id:2, name:'Sabina',email:'sabina@gmail.com'},
  {id:1, name:'Sammi',email:'sammi@gmail.com'},
]
app.get('/user',(req,res) =>{
  res.send(user);
})

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
