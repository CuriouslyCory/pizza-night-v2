import { z } from 'zod';
import { UserCreateNestedOneWithoutProposalCreatorInputObjectSchema } from './UserCreateNestedOneWithoutProposalCreatorInput.schema';
import { VoteCreateNestedManyWithoutProposalInputObjectSchema } from './VoteCreateNestedManyWithoutProposalInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.string().optional(),name: z.string(),createdAt: z.coerce.date().optional(),expiresAt: z.coerce.date(),createdBy: z.lazy(() => UserCreateNestedOneWithoutProposalCreatorInputObjectSchema),votes: z.lazy(() => VoteCreateNestedManyWithoutProposalInputObjectSchema).optional()
}).strict();

 export const ProposalCreateWithoutParticipantsInputObjectSchema = Schema
