var express = require('express');
var router = express.Router();
var Personaje = require('../models/personaje');

/* GET home page. */
router.get('/', async(req, res) => {
  try{
      const personajes = await Personaje.find({}, 'id name status species image');
      res.render('personajes', {personajes});
  } catch(error){
      console.log(error);
      res.status(500).send(error);
  }
});

router.post('/', async(req, res) => {
  const {id} = req.body;
  try{
      const personajes = await Personaje.find({id:id}, 'id name image status species');
      console.log(personajes);
      res.render('personajes', {personajes});
  } catch(error){
      res.status(500).send(error);
  }
});

module.exports = router;