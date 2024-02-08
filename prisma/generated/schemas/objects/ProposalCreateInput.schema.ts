import { z } from 'zod';
import { UserCreateNestedOneWithoutProposalCreatorInputObjectSchema } from './UserCreateNestedOneWithoutProposalCreatorInput.schema';
import { VoteCreateNestedManyWithoutProposalInputObjectSchema } from './VoteCreateNestedManyWithoutProposalInput.schema';
import { UserCreateNestedManyWithoutProposalParticipantInputObjectSchema } from './UserCreateNestedManyWithoutProposalParticipantInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.string().optional(),createdAt: z.coerce.date().optional(),expiresAt: z.coerce.date(),creator: z.lazy(() => UserCreateNestedOneWithoutProposalCreatorInputObjectSchema),votes: z.lazy(() => VoteCreateNestedManyWithoutProposalInputObjectSchema).optional(),participants: z.lazy(() => UserCreateNestedManyWithoutProposalParticipantInputObjectSchema).optional()
}).strict();

 export const ProposalCreateInputObjectSchema = Schema
