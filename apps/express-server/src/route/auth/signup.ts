import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { db } from "@repo/db";
import { createRouter } from "utils/createRouter";
import { signupSchema } from "@repo/db/schema/auth";
import { setUserSession } from "utils/userSession";

const router = createRouter();

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const parsedbody = signupSchema.parse(req.body);
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

    setUserSession(req, res, createUser);

    return res.json({ message: "You have signed up successfully" });
  } catch (err) {
    return res.send(err);
  }
});
router.get("/signupViaBrowser", (req: Request, res: Response) => {
  const signupEndpoint = "/signup";
  res.send(`
  <h2 style="text-align: center; color: slategray; padding: 20px; margin-bottom: 30px;">Sign up</h2>
  <form action="${signupEndpoint}" method="post" style="width: 400px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
    <div style="margin-bottom: 10px;">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" style="width: 100%; padding: 10px; border: 1px solid lightgray; border-radius: 5px;">
    </div>
    <div style="margin-bottom: 10px;">
      <label for="name">Name:</label>
      <input type="name" name="name" id="name" style="width: 100%; padding: 10px; border: 1px solid lightgray; border-radius: 5px;">
    </div>
    <div style="margin-bottom: 10px;">
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" style="width: 100%; padding: 10px; border: 1px solid lightgray; border-radius: 5px;">
    </div>
    <input type="submit" value="Login" style="background-color: slategray; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
  </form>
  `);
});
export { router as signupRoute };
