import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { db } from "@turbocell/db";
import { createRouter } from "utils/createRouter";
import { signupSchema } from "@turbocell/db/schema/auth";

const router = createRouter();

router.post("/signup", async (req: Request, res: Response) => {
  // zod validation required
  const parsedbody = signupSchema.parse(req.body);
  try {
    const user = await db.user.findFirst({
      where: { email: parsedbody.email },
    });
    if (user) {
      return res.send("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(parsedbody.password, 10);

    const createUser = await db.user.create({
      data: {
        email: parsedbody.email,
        name: parsedbody.name,
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
