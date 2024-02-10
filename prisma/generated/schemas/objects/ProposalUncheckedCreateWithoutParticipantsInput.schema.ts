import { z } from 'zod';
import { VoteUncheckedCreateNestedManyWithoutProposalInputObjectSchema } from './VoteUncheckedCreateNestedManyWithoutProposalInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.string().optional(),name: z.string(),createdById: z.string(),createdAt: z.coerce.date().optional(),expiresAt: z.coerce.date(),votes: z.lazy(() => VoteUncheckedCreateNestedManyWithoutProposalInputObjectSchema).optional()
}).strict();

 export const ProposalUncheckedCreateWithoutParticipantsInputObjectSchema = Schema
