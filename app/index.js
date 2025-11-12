const express = require('express');
const app = express();
app.get('/', (req,res)=> res.send('Hello from DevSecOps challenge'));
app.listen(3000, ()=> console.log('listening on 3000'));
