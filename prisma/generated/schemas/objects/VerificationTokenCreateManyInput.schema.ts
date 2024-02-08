import { z } from 'zod';


import type { Prisma } from '@prisma/client';

const Schema = z.object({
  identifier: z.string(),token: z.string(),expires: z.coerce.date()
}).strict();

 export const VerificationTokenCreateManyInputObjectSchema = Schema
