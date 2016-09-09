var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({host:"192.168.0.107",port:8000});
wss.on('connection', function(ws) 
{
	number=number+1;
	var thisnum = wss.clients.length-1;
    wss.clients[thisnum].send("3a"+'2'+'b'+number+'@');
   // number=number+1;	
    console.log('connecting count:'+wss.clients.length);
    wss.clients[thisnum].send("1"+"系统：正在加载画布的历史记录..请稍后再画QAQ"+"@");	
    var ptr=0;
    for(var i = 0; i < data.length;i++){
	if(data.toString("utf-8",i,i+1)=='@')
	{	
		message = data.toString("utf-8",ptr,i+1);
		wss.clients[thisnum].send(message);
		ptr=i+1;
	}
    }
    wss.clients[thisnum].send("1"+"系统：加载完了ww！"+"@");
    wss.clients[thisnum].send("1"+"系统：接下来加载聊天记录.."+"@");
    var ptr=0;
    for(var i = 0; i < data2.length;i++){
	if(data2.toString("utf-8",i,i+1)=='@')
	{	
		message = data2.toString("utf-8",ptr,i+1);
		wss.clients[thisnum].send(message);
		ptr=i+1;
	}
    }
    wss.clients[thisnum].send("1"+"系统：加载完了ww！"+"@");

    ws.on('message', function(message) 
    {
	if(message[0]==1){
		console.log('received: %s', message);
		console.log('data2: '+data2.toString("utf-8", 0, 1024));
		data2len=data2.write(message,data2len2,"utf-8");
		data2len2=data2len2+data2len;
		for(var i = 0; i < wss.clients.length;i++)
		{
			{
				wss.clients[i].send(message);
			}
		}
	}
	else{
	 if(message[0]==3){data.fill();datalen=datalen2=0;}
	 
		console.log('received: %s', message);
		//console.log('data: '+data.toString("utf-8", 0, 1024));
		datalen=data.write(message,datalen2,"utf-8");
		datalen2=datalen2+datalen;
		for(var i = 0; i < wss.clients.length;i++)
		{
			{
				wss.clients[i].send(message);
			}
		}
	 
	}
    });
});
wss.on('close', function(ws) 
{//暂时不起效。
	console.log('connecting lose');
        for(var i = 0; i < wss.clients.length;i++)
	{						
		{
			wss.clients[i].send("1"+"系统：有人离开了房间 "+"@");
		}
	}	
});
var data  = new Buffer(1024*1024*3);
var data2 = new Buffer(1024*1024*3);
var number=0;
var datalen=0,datalen2=0;
var data2len=0,data2len2=0;
console.log(process.pid);
console.log('WebSocket Server running =w=');