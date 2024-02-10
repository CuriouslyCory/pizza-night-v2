import { z } from 'zod';
import { VoteUncheckedCreateNestedManyWithoutProposalInputObjectSchema } from './VoteUncheckedCreateNestedManyWithoutProposalInput.schema';
import { UserUncheckedCreateNestedManyWithoutProposalParticipantInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutProposalParticipantInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.string().optional(),name: z.string(),createdById: z.string(),createdAt: z.coerce.date().optional(),expiresAt: z.coerce.date(),votes: z.lazy(() => VoteUncheckedCreateNestedManyWithoutProposalInputObjectSchema).optional(),participants: z.lazy(() => UserUncheckedCreateNestedManyWithoutProposalParticipantInputObjectSchema).optional()
}).strict();

 export const ProposalUncheckedCreateInputObjectSchema = Schema
