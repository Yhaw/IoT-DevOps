const WebSocketServer = require('ws');


const wss = new WebSocketServer.Server({ 
    port: 8080, 
 })


wss.on("connection",(socket, req) => {
    console.log("Client Connected")
        
    socket.on("message", msg => {
    let message = msg.toString().replace(/(<([^>]+)>)/gi, "");
    console.log(message);
    });
    
  });
  
  console.log("The WebSocket server is running at 8080");
  

