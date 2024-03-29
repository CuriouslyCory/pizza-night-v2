import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { PostUpdateManyWithoutCreatedByNestedInputObjectSchema } from './PostUpdateManyWithoutCreatedByNestedInput.schema';
import { PizzaUpdateManyWithoutCreatedByNestedInputObjectSchema } from './PizzaUpdateManyWithoutCreatedByNestedInput.schema';
import { ToppingUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ToppingUpdateManyWithoutCreatedByNestedInput.schema';
import { VoteUpdateManyWithoutUserNestedInputObjectSchema } from './VoteUpdateManyWithoutUserNestedInput.schema';
import { ProposalUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProposalUpdateManyWithoutCreatedByNestedInput.schema';
import { ProposalUpdateManyWithoutParticipantsNestedInputObjectSchema } from './ProposalUpdateManyWithoutParticipantsNestedInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.union([z.string(),
z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),name: z.union([z.string(),
z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),email: z.union([z.string(),
z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),emailVerified: z.union([z.coerce.date(),
z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),image: z.union([z.string(),
z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional(),posts: z.lazy(() => PostUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),pizza: z.lazy(() => PizzaUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),topping: z.lazy(() => ToppingUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),vote: z.lazy(() => VoteUpdateManyWithoutUserNestedInputObjectSchema).optional(),proposalCreator: z.lazy(() => ProposalUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),proposalParticipant: z.lazy(() => ProposalUpdateManyWithoutParticipantsNestedInputObjectSchema).optional()
}).strict();

 export const UserUpdateWithoutSessionsInputObjectSchema = Schema
