import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@turbocell/trpc";
import { createContext } from "@turbocell/trpc/server/context";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest & Request, res: NextApiResponse) => {
  const context = await createContext({ req, res });
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => context,
  });
};
export { handler as GET, handler as POST };
