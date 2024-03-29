import { z } from 'zod';


import type { Prisma } from '@prisma/client';

const Schema = z.object({
  expires_at: z.literal(true).optional()
}).strict();

 export const AccountSumAggregateInputObjectSchema = Schema
