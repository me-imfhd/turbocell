import { deleteAllComputers } from "@turbocell/api/api-endpoint-blogic/computers/mutations";
import { Request, Response } from "express";
import { NextAuthMid } from "middleware";
import { createRouter } from "utils/createRouter";

const router = createRouter();

router.delete("/deleteComputers", async (req: Request, res: Response) => {
  try {
    const c = await deleteAllComputers();
    if (!c) {
      return res.status(500).json({
        message: "Error deleting computer, please try again",
      });
    }
    res.json({ c });
  } catch (err) {
    return res.json({ error: err });
  }
});

// todo: implement delete computer by Id

export { router as deleteComputerRoute };
