//mongoose
const mongoose = require('mongoose');

//connect to db
mongoose.connect("mongodb://localhost:27017/nodeCrud2", { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
  })
  .catch(() => {
    console.log('connection failed');
  });


module.exports = mongoose;
