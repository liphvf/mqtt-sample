var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/enviar', function(req, res, next) {
  
  console.log("Chegou aqui");
  res.redirect('/');
});

module.exports = router;
