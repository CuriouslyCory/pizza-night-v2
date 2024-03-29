import { z } from 'zod';


import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.literal(true).optional(),sessionToken: z.literal(true).optional(),userId: z.literal(true).optional(),expires: z.literal(true).optional()
}).strict();

 export const SessionMinAggregateInputObjectSchema = Schema
