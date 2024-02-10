import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VoteUncheckedUpdateManyWithoutProposalNestedInputObjectSchema } from './VoteUncheckedUpdateManyWithoutProposalNestedInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.union([z.string(),
z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),name: z.union([z.string(),
z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),createdById: z.union([z.string(),
z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),createdAt: z.union([z.coerce.date(),
z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),expiresAt: z.union([z.coerce.date(),
z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),votes: z.lazy(() => VoteUncheckedUpdateManyWithoutProposalNestedInputObjectSchema).optional()
}).strict();

 export const ProposalUncheckedUpdateWithoutParticipantsInputObjectSchema = Schema
