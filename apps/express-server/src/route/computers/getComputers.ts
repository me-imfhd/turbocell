import {
  getComputerById,
  getComputers,
} from "@repo/api/api-endpoint-blogic/computers/queries";
import { ComputerId } from "@repo/db/schema/computers";
import { Request, Response } from "express";
import { createRouter } from "utils/createRouter";

const router = createRouter();
// get all computers
router.get("/getComputers", async (req: Request, res: Response) => {
  try {
    const computers = await getComputers();
    return res.json({ computers });
  } catch (err) {
    return res.json({ error: err });
  }
});

// get computers by id
router.get("/getComputer/:id", async (req: Request, res: Response) => {
  const id = req.params.id as ComputerId;
  console.log(id);
  if (!id) { 
    return res
      .status(400)
      .json({ message: "Computer Id not recieved, please try again" });
  }
  // zod validation is done in api
  try {
    const computers = await getComputerById(id);
    if (!computers) {
      return res
        .status(500)
        .json({ message: "Error getting computer, please try again" });
    }
    return res.json({ computers });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

export { router as getComputerRoute };
