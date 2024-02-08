import { PizzaCreateInputObjectSchema } from "prisma/generated/schemas";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const pizzaRouter = createTRPCRouter({
  create: protectedProcedure
    .input(PizzaCreateInputObjectSchema)
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.pizza.create({
        data: {
          name: input.name,
          toppings: input.toppings,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.proposal.findMany({
      orderBy: { expiresAt: "desc" },
      where: { participants: { some: { id: ctx.session.user.id } } },
    });
  }),
});
