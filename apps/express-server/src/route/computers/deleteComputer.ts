import { deleteAllComputers } from "@repo/api/api-endpoint-blogic/computers/mutations";
import { Request, Response } from "express";
import { checkAuthenticated } from "utils/checkAuth";
import { createRouter } from "utils/createRouter";

const router = createRouter();

router.delete(
  "/deleteComputers",
  checkAuthenticated,
  async (req: Request, res: Response) => {
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
    return;
  }
  
);

// todo: implement delete computer by Id

export { router as deleteComputerRoute };
