import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const preSignedUrlLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "60 s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});
