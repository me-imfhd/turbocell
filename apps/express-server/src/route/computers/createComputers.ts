import { createComputer } from "@repo/api/api-endpoint-blogic/computers/mutations";
import { Request, Response } from "express";
import { checkAuthenticated } from "utils/checkAuth";
import { createRouter } from "utils/createRouter";

const router = createRouter();

router.post(
  "/createComputer",
  checkAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const c = await createComputer({
        brand: req.body.brand,
        cores: req.body.cores,
      });
      if (!c) {
        return res.status(500).json({
          message: "Error creating computer, please check your params",
        });
      }
      return res.json({ c });
      // you can also do
      // res.json({ computerBrand: c.computer.brand }); see what c returns by checking its return type.
    } catch (err) {
      return res.json({ error: err });
    }
  }
);

export { router as createComputerRoute };
