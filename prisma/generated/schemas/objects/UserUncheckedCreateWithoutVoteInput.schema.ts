import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { PostUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { PizzaUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './PizzaUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ToppingUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ToppingUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ProposalUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProposalUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ProposalUncheckedCreateNestedManyWithoutParticipantsInputObjectSchema } from './ProposalUncheckedCreateNestedManyWithoutParticipantsInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.string().optional(),name: z.string().optional().nullable(),email: z.string().optional().nullable(),emailVerified: z.coerce.date().optional().nullable(),image: z.string().optional().nullable(),accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),pizza: z.lazy(() => PizzaUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),topping: z.lazy(() => ToppingUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),proposalCreator: z.lazy(() => ProposalUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),proposalParticipant: z.lazy(() => ProposalUncheckedCreateNestedManyWithoutParticipantsInputObjectSchema).optional()
}).strict();

 export const UserUncheckedCreateWithoutVoteInputObjectSchema = Schema
