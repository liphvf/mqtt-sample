var express = require('express');
var router = express.Router();
var path = require('path');
var mqtt = require('mqtt')

var client = mqtt.connect('mqtt://gncjecus:EU56oW3t6R4r@m14.cloudmqtt.com:16941');

client.on('connect', function () {
  console.log("conectado: ", client.connected);
  client.subscribe('node')
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
  client.publish('node', req.body.resposta);
  
  // res.redirect('/');
  res.sendStatus(200);
});

module.exports = router;
