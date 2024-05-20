import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import {
  ACCESS_KEY_ID,
  ACCESS_SECRET,
  BUCKET_NAME,
  CLOUDFRONT_URL,
  IdType,
  REGION,
  throwTRPCError,
} from "../common";
import { S3Client } from "@aws-sdk/client-s3";
import axios from "axios";
import { db } from "@repo/db";
import { preSignedUrlLimit } from "../rate-limit";
import { TRPCError } from "@trpc/server";
import { checkAuth } from "@repo/auth/server";

const s3Client = new S3Client({
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: ACCESS_SECRET,
  },
  region: REGION,
});

export const getPresignedUrl = async () => {
  const { id } = await checkAuth();
  const { success } = await preSignedUrlLimit.limit(id);
  if (!success) {
    throw new TRPCError({
      code: "TOO_MANY_REQUESTS",
      message: "Rate Limit Exceeded, try after some time",
    });
  }
  try {
    const { url, fields } = await createPresignedPost(s3Client, {
      Bucket: BUCKET_NAME,
      Key: `turbocell/${id}/image.jpg`,
      Conditions: [
        ["content-length-range", 0, 5 * 1024 * 1024], // 5 MB max
      ],
      Expires: 3600,
    });

    return {
      preSignedUrl: url,
      fields,
    };
  } catch (error) {
    return throwTRPCError(error);
  }
};

// call on client side
export const uploadImage = async (userId: IdType, file: File) => {
  try {
    const { fields, preSignedUrl } = await getPresignedUrl();
    const formData = new FormData();
    formData.set("bucket", fields["bucket"]!);
    formData.set("X-Amz-Algorithm", fields["X-Amz-Algorithm"]!);
    formData.set("X-Amz-Credential", fields["X-Amz-Credential"]!);
    formData.set("X-Amz-Algorithm", fields["X-Amz-Algorithm"]!);
    formData.set("X-Amz-Date", fields["X-Amz-Date"]!);
    formData.set("key", fields["key"]!);
    formData.set("Policy", fields["Policy"]!);
    formData.set("X-Amz-Signature", fields["X-Amz-Signature"]!);
    formData.set("X-Amz-Algorithm", fields["X-Amz-Algorithm"]!);
    formData.append("file", file);
    axios.post(preSignedUrl, formData);

    const image = `${CLOUDFRONT_URL}/${fields["key"]!}`;
    await db.user.update({ where: { id: userId }, data: { image } });
    return image;
  } catch (e) {
    return throwTRPCError(e);
  }
};
