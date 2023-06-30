const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.get('/', (req, res)=>{
    res.send('<h2> Welcome to Sage</h2>');
});
app.get('/about', (req, res)=>{
    res.send(' this is about page ');
});
app.listen(5000, ()=>{
    console.log('server Listening on port 5000')
});