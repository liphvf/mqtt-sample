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