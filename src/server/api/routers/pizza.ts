import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const pizzaRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string(), toppings: z.array(z.string()) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.pizza.create({
        data: {
          name: input.name,
          toppings: {
            connect: input.toppings.map((id) => ({ id })),
          },
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
});
