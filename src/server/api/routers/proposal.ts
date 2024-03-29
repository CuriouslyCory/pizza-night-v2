import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const proposalaRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string(), expiresAt: z.date() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.proposal.create({
        data: {
          name: input.name,
          expiresAt: input.expiresAt,
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
