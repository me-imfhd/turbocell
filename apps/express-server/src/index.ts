import { createTRPCServer } from "openapi-trpc.server";
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

// express server whose routes are written in trpc in the api package inside /api/express-server/routes/_app.ts
const trpcServer = createTRPCServer();
trpcServer.listen(2024, () => {
  console.log(`Api running on port 2024 `);
});
