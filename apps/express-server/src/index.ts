import { setupRoutes } from "routes";
import { createServer } from "server";

const port = process.env.EXPRESSPORT || 8080;
const server = createServer();

setupRoutes(server);

server.listen(port, () => {
  console.log(
    `Api running on ${port}, http://localhost:${port}/loginViaBrowser, http://localhost:${port}/signupViaBrowser`
  );
});
