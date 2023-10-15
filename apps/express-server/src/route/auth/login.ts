import { Request, Response } from "express";
import { createRouter } from "utils/createRouter";
import { db } from "@turbocell/db";
import bcrypt from "bcrypt";
import { loginSchema } from "@turbocell/db/schema/auth";
const router = createRouter();

router.post("/login", async (req: Request, res: Response) => {
  const parsedBody = loginSchema.parse(req.body);
  try {
    const user = await db.user.findFirst({
      where: { email: parsedBody.email },
    });
    if (
      user &&
      user.hashedPassword &&
      (await bcrypt.compare(parsedBody.password, user.hashedPassword))
    ) {
      req.session.user = user;
      res.send("Logged in");
    } else {
      res.send("Invalid username or password");
    }
  } catch (err) {
    res.send(err);
  }
});

export { router as loginRouter };
