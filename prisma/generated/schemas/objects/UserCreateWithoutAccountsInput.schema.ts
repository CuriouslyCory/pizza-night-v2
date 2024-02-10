import { z } from 'zod';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { PostCreateNestedManyWithoutCreatedByInputObjectSchema } from './PostCreateNestedManyWithoutCreatedByInput.schema';
import { PizzaCreateNestedManyWithoutCreatedByInputObjectSchema } from './PizzaCreateNestedManyWithoutCreatedByInput.schema';
import { ToppingCreateNestedManyWithoutCreatedByInputObjectSchema } from './ToppingCreateNestedManyWithoutCreatedByInput.schema';
import { VoteCreateNestedManyWithoutUserInputObjectSchema } from './VoteCreateNestedManyWithoutUserInput.schema';
import { ProposalCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProposalCreateNestedManyWithoutCreatedByInput.schema';
import { ProposalCreateNestedManyWithoutParticipantsInputObjectSchema } from './ProposalCreateNestedManyWithoutParticipantsInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.string().optional(),name: z.string().optional().nullable(),email: z.string().optional().nullable(),emailVerified: z.coerce.date().optional().nullable(),image: z.string().optional().nullable(),sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),posts: z.lazy(() => PostCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),pizza: z.lazy(() => PizzaCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),topping: z.lazy(() => ToppingCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),vote: z.lazy(() => VoteCreateNestedManyWithoutUserInputObjectSchema).optional(),proposalCreator: z.lazy(() => ProposalCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),proposalParticipant: z.lazy(() => ProposalCreateNestedManyWithoutParticipantsInputObjectSchema).optional()
}).strict();

 export const UserCreateWithoutAccountsInputObjectSchema = Schema
