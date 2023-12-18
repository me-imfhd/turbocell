import { NextApiRequest, NextApiResponse } from "next";
// import cors from 'nextjs-cors';
import { createOpenApiNextHandler } from "@turbocell/trpc/openApi";
import { appRouter } from "@turbocell/trpc";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Setup CORS
  // await cors(req, res);

  // Handle incoming OpenAPI requests
  return createOpenApiNextHandler({
    router: appRouter,
  })(req, res);
};

export { handler as GET, handler as POST };
export default handler;