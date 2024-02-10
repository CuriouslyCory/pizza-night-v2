import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const toppingRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.topping.findMany({
      orderBy: [{ category: "asc" }, { name: "asc" }],
    });
  }),
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        category: z.string(),
        approved: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.topping.create({
        data: {
          name: input.name,
          category: "cheese",
          createdById: ctx.session.user.id,
          approved: false,
        },
      });
    }),
});
