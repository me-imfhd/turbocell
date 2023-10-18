import { Request, Response } from "express";
import { createRouter } from "utils/createRouter";
import formidable from "formidable";
import fs from "fs";
import { encodeImageToBase64 } from "@turbocell/db";

const router = createRouter();

router.post("/updateImage", (req, res) => {
  try {
    const form = formidable({ maxFiles: 1, uploadDir: "./" });
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log("Error parsing the files");
        return res.status(400).json({
          status: "Fail",
          message: "There was an error parsing the files",
          error: err.message,
        });
      }
      const file = files.someExpressFiles; // don't know why but have use this
      if (!file) {
        return res.send("File not found");
      }
      if (!file[0]) {
        return res.send("File not found");
      }
      const finalFile: formidable.File = file[0];
      const base64Image = encodeImageToBase64(finalFile.filepath);

      validateImage(req, res, finalFile);

      res.send(`
        <div style="margin-bottom: 10px;"><img src=${base64Image} style="width: 400px; height:400px; padding: 10px; border: 1px solid lightgray; border-radius: 5px;"></div>
        `);
      fs.unlinkSync(finalFile.filepath);
    });
  } catch (err) {
    res.json({
      status: "Fail",
      message: `Exception Occured : ${err}`,
    });
  }
});

router.get("/updateUser", (req: Request, res: Response) => {
  const updateImageEndpoint = "/updateImage";
  res.send(`
  <h2 style="text-align: center; color: slategray; padding: 20px; margin-bottom: 30px;">Update Profile</h2>
  <form action="${updateImageEndpoint}" enctype="multipart/form-data" method="post" style="width: 400px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
    <div style="margin-bottom: 10px;">File: <input type="file" name="someExpressFiles" multiple="multiple" style="width: 100%; padding: 10px; border: 1px solid lightgray; border-radius: 5px;"></div>
    <input type="submit" value="Upload" style="background-color: slategray; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
  </form>
  
    `);
});

function validateImage(req: Request, res: Response, file: formidable.File) {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
  const finalFileMime = file.mimetype as string;
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  const finalFileExt = ("." +
    file.originalFilename?.split(".").at(-1)?.toLowerCase()) as string;
  const maxFileSize = 1 * 1024 * 1024; // 1 MB
  const finalFileSize = file.size;

  if (!allowedMimeTypes.includes(finalFileMime)) {
    return res.status(400).json({
      status: "Fail",
      message:
        "Invalid file type. Only JPEG, PNG, and WebP images are allowed.",
    });
  }
  if (!allowedExtensions.includes(finalFileExt)) {
    return res.status(400).json({
      status: "Fail",
      message:
        "Invalid file extension. Only JPEG, PNG, and WebP images are allowed.",
    });
  }

  if (finalFileSize > maxFileSize) {
    return res.status(400).json({
      status: "Fail",
      message:
        "File size exceeds the limit. Maximum file size allowed is 1 MB.",
    });
  }
}
export { router as updateUserRoute };
