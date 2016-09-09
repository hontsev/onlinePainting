var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8000});
wss.on('connection', function(ws) 
{
    console.log('connecting count:'+wss.clients.length);
    console.log('yo!');
    ws.on('message', function(message) 
    {
       	console.log('received: %s', message);
	for(var i = 0; i < wss.clients.length;i++)
	{
								//if(wss.clients[i]!=ws)
		{
			wss.clients[i].send(message);
		}
	}
								//发送广播   
      								  //ws.broadcast(message);
    });
});
console.log(process.pid);
console.log('WebSocket Server running at ws://127.0.0.1:8000/');