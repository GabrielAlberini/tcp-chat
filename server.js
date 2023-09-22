// MÓDULO SERVIDOR

import net from "node:net";
import readline from "readline-sync";
import * as controller from "./controller.js";

const serverTCP = net.createServer();
const PORT = 7200;

serverTCP.on("connection", (socket) => {
  socket.on("data", (clientData) => {
    const clientMsg = clientData.toString();

    let serverMsg;
    // console.log("CLIENT -->", clientMsg);
    // serverMsg = readline.question("SERVER --> ");

    switch (clientMsg) {
      case "--history":
        serverMsg = "Pediste todos los mensajes";
        break;
      default:
        serverMsg = readline.question("SERVER --> "); // chau
        break;
    }

    socket.write(serverMsg);
  });

  socket.on("close", () => console.log("Connection stopped"));
  socket.on("error", (err) => console.log(err));

  console.log("Client connected!");
});

// SERVER RUNNING

serverTCP.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
