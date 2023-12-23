import { NextApiRequest, NextApiResponse } from "next";
// import cors from 'nextjs-cors';
// import { createOpenApiNextHandler } from "@turbocell/trpc/openApi";
// import { appRouter } from "@turbocell/trpc";
// import { createContext } from "@turbocell/trpc/server/context";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Setup CORS
  // await cors(req, res);
  res.json({ msg: "This is under development" });
  // Handle incoming OpenAPI requests
  // return createOpenApiNextHandler({
  //   router: appRouter,
  //   createContext,
  // })(req, res);
};

export default handler;
