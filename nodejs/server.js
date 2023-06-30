const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const connectDB  = require('./Database/config');

const applicantRoute = require('./route/applicant.route');


connectDB();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
app.use('/applicant', applicantRoute);



const port = process.env.PORT || 4000;
const server = app.listen(port, () =>{
  console.log('Server connected to port '+ port)
} )


app.use((req, res, next) => {
  res.status(404).send('Error 404!')
})

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
})

