const mongoose = require('mongoose');

const HeroSchema = mongoose.Schema({
  name: {type: String, required: true},
  nickname: {type: String, required: true},
  power: {type: String, required: true},
  heroClass: {type: String, required: true}
});

module.exports = mongoose.model('Hero', HeroSchema);

