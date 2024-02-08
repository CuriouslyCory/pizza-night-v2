import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { ToppingCreateInputObjectSchema } from "prisma/generated/schemas";

export const toppingRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.topping.findMany();
  }),
  create: protectedProcedure
    .input(ToppingCreateInputObjectSchema.omit({ createdBy: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.topping.create({
        data: {
          name: input.name,
          category: input.category,
          createdById: ctx.session.user.id,
          approved: false,
        },
      });
    }),
});
