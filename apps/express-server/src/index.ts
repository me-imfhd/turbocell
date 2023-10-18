import { setupRoutes } from "routes";
import { createServer } from "server";

const port = process.env.EXPRESSPORT || 8081;
const server = createServer();

setupRoutes(server);

server.listen(port, () => {
  console.log(
    `api running on ${port}, http://localhost:${port}/user , http://localhost:${port}/getComputers`
  );
});
