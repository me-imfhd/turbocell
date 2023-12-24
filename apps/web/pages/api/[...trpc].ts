import { NextApiRequest, NextApiResponse } from "next";
// import cors from 'nextjs-cors';
import { createOpenApiNextHandler } from "@turbocell/trpc/openApi";
import { appRouter } from "@turbocell/trpc";
import {
  createContextApi,
} from "@turbocell/trpc/server/context";
import { NextRequest, NextResponse } from "next/server";

const handler = async (
  req: NextRequest & NextApiRequest & Request,
  res: NextResponse & NextApiResponse & Response
) => {
  // Setup CORS
  // await cors(req, res);
  const context = await createContextApi({ req, res });
  // Handle incoming OpenAPI requests
  return createOpenApiNextHandler({
    router: appRouter,
    createContext: () => context,
  })(req, res);
};

export default handler;
