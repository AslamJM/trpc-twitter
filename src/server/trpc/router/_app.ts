import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { tweetRouter } from "./tweet";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  tweet: tweetRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
