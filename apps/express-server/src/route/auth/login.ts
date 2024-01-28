import { Request, Response } from "express";
import { createRouter } from "utils/createRouter";
import { db } from "@repo/db";
import bcrypt from "bcrypt";
import { loginSchema } from "@repo/db/schema/auth";
const router = createRouter();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const parsedBody = loginSchema.parse(req.body);
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
router.get("/loginViaBrowser",async(req:Request, res:Response)=>{
  const loginEndpoint = "/login"
  res.send(`
  <h2 style="text-align: center; color: slategray; padding: 20px; margin-bottom: 30px;">Login</h2>
  <form action="${loginEndpoint}" method="post" style="width: 400px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
    <div style="margin-bottom: 10px;">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" style="width: 100%; padding: 10px; border: 1px solid lightgray; border-radius: 5px;">
    </div>
    <div style="margin-bottom: 10px;">
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" style="width: 100%; padding: 10px; border: 1px solid lightgray; border-radius: 5px;">
    </div>
    <input type="submit" value="Login" style="background-color: slategray; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
  </form>

  `)
})
export { router as loginRouter };
