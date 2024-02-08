import { z } from 'zod';


import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.string().optional(),createdBy: z.string(),createdAt: z.coerce.date().optional(),expiresAt: z.coerce.date()
}).strict();

 export const ProposalCreateManyInputObjectSchema = Schema
