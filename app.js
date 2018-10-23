const express = require('express');
const mongoose = require('./db');
const bodyParser = require('body-parser');

const heroController = require('./controller/heroController');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", heroController);



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



// app.get('/', (req, res) => {
//   Hero.find()
//     .then(dbHero => {
//       res.status(200).json({
//         message: "Hero fetched successfully!",
//         employee: dbHero
//       });
//     })
//     .catch(error => {
//       res.status(500).json({
//         message: "Couldn't get Heroes!!",
//         error: error
//       });
//     });
// });
//
//



app.listen('3000', () => {
  console.log('app is running on port 3000');
});