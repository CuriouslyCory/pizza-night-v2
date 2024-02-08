import { z } from 'zod';


import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.literal(true).optional(),userId: z.literal(true).optional(),proposalId: z.literal(true).optional(),pizzaId: z.literal(true).optional()
}).strict();

 export const VoteMinAggregateInputObjectSchema = Schema
