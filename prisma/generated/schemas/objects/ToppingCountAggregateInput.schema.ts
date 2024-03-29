import { z } from 'zod';


import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.literal(true).optional(),name: z.literal(true).optional(),category: z.literal(true).optional(),createdById: z.literal(true).optional(),approved: z.literal(true).optional(),createdAt: z.literal(true).optional(),updatedAt: z.literal(true).optional(),_all: z.literal(true).optional()
}).strict();

 export const ToppingCountAggregateInputObjectSchema = Schema
