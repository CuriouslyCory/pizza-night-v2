import { createTRPCRouter } from "~/server/api/trpc";
import { toppingRouter } from "./routers/topping";
import { proposalaRouter } from "./routers/proposal";
import { pizzaRouter } from "./routers/pizza";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  pizza: pizzaRouter,
  topping: toppingRouter,
  proposal: proposalaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
