import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { db } from "@turbocell/db";
import { createRouter } from "utils/createRouter";

const router = createRouter();

router.post("/signup", async (req: Request, res: Response) => {
  // zod validation required
  const body = req.body;
  try {
    const user = await db.user.findFirst({
      where: { email: body.email },
    });
    if (user) {
      return res.send("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const createUser = await db.user.create({
      data: {
        email: body.email,
        name: body.name,
        hashedPassword: hashedPassword,
      },
    });
    req.session.user = createUser;
    console.log(req.session.user);

    res.json({ message: "You have signed up successfully" });
  } catch (err) {
    res.send(err);
  }
});

export { router as signupRoute };
