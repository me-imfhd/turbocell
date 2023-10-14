import { Request, Response } from "express";
import { createRouter } from "utils/createRouter";
import { db } from "@turbocell/db";
import bcrypt from "bcrypt";

const router = createRouter();

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await db.user.findFirst({
      where: { email: email },
    });
    if (
      user &&
      user.hashedPassword &&
      (await bcrypt.compare(password, user.hashedPassword))
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


export {router as loginRouter}