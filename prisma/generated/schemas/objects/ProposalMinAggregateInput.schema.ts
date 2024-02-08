import { z } from 'zod';


import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.literal(true).optional(),createdBy: z.literal(true).optional(),createdAt: z.literal(true).optional(),expiresAt: z.literal(true).optional()
}).strict();

 export const ProposalMinAggregateInputObjectSchema = Schema
