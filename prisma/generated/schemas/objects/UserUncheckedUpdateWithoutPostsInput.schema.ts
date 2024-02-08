import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { PizzaUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './PizzaUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ToppingUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ToppingUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { VoteUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './VoteUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ProposalUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema } from './ProposalUncheckedUpdateManyWithoutCreatorNestedInput.schema';
import { ProposalUncheckedUpdateManyWithoutParticipantsNestedInputObjectSchema } from './ProposalUncheckedUpdateManyWithoutParticipantsNestedInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.union([z.string(),
z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),name: z.union([z.string(),
z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),email: z.union([z.string(),
z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),emailVerified: z.union([z.coerce.date(),
z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),image: z.union([z.string(),
z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),pizza: z.lazy(() => PizzaUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),topping: z.lazy(() => ToppingUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),vote: z.lazy(() => VoteUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),proposalCreator: z.lazy(() => ProposalUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema).optional(),proposalParticipant: z.lazy(() => ProposalUncheckedUpdateManyWithoutParticipantsNestedInputObjectSchema).optional()
}).strict();

 export const UserUncheckedUpdateWithoutPostsInputObjectSchema = Schema
