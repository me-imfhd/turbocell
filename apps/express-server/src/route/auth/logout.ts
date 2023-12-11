import { Request, Response } from "express";
import { createRouter } from "utils/createRouter";

const router = createRouter();

router.post("/logout", (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error logging out");
    }
    res.clearCookie("connect.sid");
    return res.send("Logged out");
  });
});

export {router as logoutRouter}