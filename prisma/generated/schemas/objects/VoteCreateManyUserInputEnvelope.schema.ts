import { z } from 'zod';
import { VoteCreateManyUserInputObjectSchema } from './VoteCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  data: z.union([z.lazy(() => VoteCreateManyUserInputObjectSchema),
z.lazy(() => VoteCreateManyUserInputObjectSchema).array()]),skipDuplicates: z.boolean().optional()
}).strict();

 export const VoteCreateManyUserInputEnvelopeObjectSchema = Schema
