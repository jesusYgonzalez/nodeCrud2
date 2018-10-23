const express = require('express');

const router = express.Router();

const Hero = require("../models/hero");


router.get('/', (req, res) => {
  Hero.find()
    .then(dbHero => {
      res.status(200).json({
        message: "Hero fetched successfully!",
        hero: dbHero
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't get hero!!",
        error: error
      });
    });
});

router.post('/addHero', (req, res) => {
  const hero = new Hero(req.body);
  hero.save()
    .then(result => {
      res.status(201).json({
        message: 'hero added to db',
        hero: hero
      });
    })
      .catch(error => {
        res.status(500).json({
          message: "Couldn't save Employee!!"
        });
      });
});


module.exports = router;