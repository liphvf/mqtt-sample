var express = require('express');
var router = express.Router();
var path = require('path');
var mqtt = require('mqtt')

var client = mqtt.connect('mqtt://hkxmleqo:8jrTUwSKMNJz@m10.cloudmqtt.com:13044')

client.on('connect', function () {
  console.log("conectado: ", client.connected);
  client.subscribe('test')
  // Caso queira enviar uma menssagem para exemplificar.
  // client.publish('presence', 'Hello mqtt')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  // client.end()
})

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.post('/enviar/', function(req, res, next) {
  
  console.log(req.body.resposta);
  // client.publish('resposta', req.query.resposta);
  
  // res.redirect('/');
  res.sendStatus(200);
});

module.exports = router;
