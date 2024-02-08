import { pizzaRouter } from "~/server/api/routers/pizza";
import { createTRPCRouter } from "~/server/api/trpc";
import { toppingRouter } from "./routers/topping";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  pizza: pizzaRouter,
  topping: toppingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
