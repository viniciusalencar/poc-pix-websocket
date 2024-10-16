const http = require("http");
const { WebSocketServer } = require("ws");
const url = require("url");

const server = http.createServer();
const wsServer = new WebSocketServer({ server });

const PORT = 8000;

const clients = {};

const processStatusToSendResponse = (statusResponse) => {
  const responseConvertedToJson = JSON.stringify({
    status: statusResponse,
  });

  return responseConvertedToJson;
};

const sendPixSuccess = (connection) => {
  connection.send(processStatusToSendResponse(200));
};

const sendPixError = (connection) => {
  connection.send(processStatusToSendResponse(400));
};

const convertMessageToObject = (message) => {
  const messageString = message.toString();
  return JSON.parse(messageString);
};

const handleMessage = (message, connection, clientType) => {
  try {
    const formattedMessage = convertMessageToObject(message);

    if (formattedMessage.status === 200) {
      sendPixSuccess(connection);
    } else {
      sendPixError(connection);
    }

    for (const client in clients) {
      if (clients[client] !== connection) {
        clients[client].send(processStatusToSendResponse(200));
      }
    }
  } catch (error) {
    sendPixError(connection);
  }
};

wsServer.on("connection", (connection, request) => {
  const { client } = url.parse(request.url, true).query;
  clients[client] = connection;

  connection.on("message", (message) =>
    handleMessage(message, connection, client)
  );

  connection.on("close", () => {
    delete clients[client];
  });
});

server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});
