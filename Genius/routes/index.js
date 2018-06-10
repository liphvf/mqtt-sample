var express = require('express');
var router = express.Router();
var path = require('path');
var mqtt = require('mqtt')

var client = mqtt.connect('mqtt://gncjecus:EU56oW3t6R4r@m14.cloudmqtt.com:16941');

 global.Msgs  = [];

client.on('connect', function () {
  console.log("conectado: ", client.connected);
  client.subscribe('nodeS')
  client.subscribe('nodep')
  // Caso queira enviar uma menssagem para exemplificar.
  // client.publish('presence', 'Hello mqtt')
})

client.on('message', function (topic, message) {
  // message is Buffer

  console.log(message.toString(), topic.toString());
  Msgs.push({
    topic: topic.toString(),
    msg: message.toString()
  });
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

router.get('/update', function(req, res, next) {
  var menssagens = Msgs;
  Msgs = [];
  res.status(200).send(menssagens);

});

module.exports = router;
