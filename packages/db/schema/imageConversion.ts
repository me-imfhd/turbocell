import fs from "fs";

export function encodeImageToBase64(filePath: string) {
  const imageAsBase64 = fs.readFileSync(filePath, "base64");
  if(imageAsBase64.startsWith("data:image/")){
    return imageAsBase64
  }
  return "data:image/png;base64,"+imageAsBase64;
}

export function base64ToImageData(rawBinaryImageString: string) {
  const arr = rawBinaryImageString.split(",");

  if (!arr[0] || !arr[1]) {
    throw Error("Invalid image passed");
  }
  const mimeArr = arr[0].match(/:(.*?);/);

  if (!mimeArr) {
    throw Error("Invalid image passed");
  }
  const imageMime = mimeArr[1] as string;
  const imageFormat = mimeArr[1]?.split("/")[1];

  const binaryImageString = arr[1];
  const imageBuffer = Buffer.from(binaryImageString, "base64");
  const fileSizeInBytes = imageBuffer.length; // Gives the one-one size compared to original image and base64 string of the image

  return { imageBuffer, fileSizeInBytes, imageMime, imageFormat };
}