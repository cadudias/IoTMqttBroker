var mqtt    = require('mqtt');
var client  = mqtt.connect("mqtt://127.0.0.1", // com o protocolo mqtt nao precisa especificar a pasta vai ser a 1883
						  {clientId:"DispositivoJM", 
						  will: {
							topic: 'testamento',
							payload: 'Dispositivo JM morreu',
							qos: 0
						   }}
						  );

client.on("connect",function(){	
console.log("Conexão: "+ client.connected);
})
client.on("error",function(error){
console.log("Erro:" + error);
process.exit(1)});

setInterval(() => {
	client.publish('jm', 'Olá, estou vivo e operando');
}, 10000);
