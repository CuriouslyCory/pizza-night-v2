import { z } from 'zod';
import { VoteCreateManyProposalInputObjectSchema } from './VoteCreateManyProposalInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  data: z.union([z.lazy(() => VoteCreateManyProposalInputObjectSchema),
z.lazy(() => VoteCreateManyProposalInputObjectSchema).array()]),skipDuplicates: z.boolean().optional()
}).strict();

 export const VoteCreateManyProposalInputEnvelopeObjectSchema = Schema
