const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

console.log("WebSocket server is running...");

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === 1) {
                client.send(message.toString());
            }
        });
    });
});