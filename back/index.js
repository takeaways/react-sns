const express = require('express');
const app = express();

app.get('/',(req, res)=>{
  res.send('ss');
})



app.listen(80, ()=>{
  console.info(`Server is running on localhost:80`);
})
