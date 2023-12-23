import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
// import { createOpenApiNextHandler } from "@turbocell/trpc/openApi";
// import { appRouter } from "@turbocell/trpc";
// import { createContext } from "@turbocell/trpc/server/context";

async function handler(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  return Response.json({ msg: "This is under development" });
  // const context = await createContext({ req, res });
  // return createOpenApiNextHandler({
  //   router: appRouter,
  //   createContext: () => context,
  // })(req, res);
}

export { handler as GET, handler as POST };
