import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutProposalCreatorNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutProposalCreatorNestedInput.schema';
import { UserUpdateManyWithoutProposalParticipantNestedInputObjectSchema } from './UserUpdateManyWithoutProposalParticipantNestedInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.union([z.string(),
z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),name: z.union([z.string(),
z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),createdAt: z.union([z.coerce.date(),
z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),expiresAt: z.union([z.coerce.date(),
z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),createdBy: z.lazy(() => UserUpdateOneRequiredWithoutProposalCreatorNestedInputObjectSchema).optional(),participants: z.lazy(() => UserUpdateManyWithoutProposalParticipantNestedInputObjectSchema).optional()
}).strict();

 export const ProposalUpdateWithoutVotesInputObjectSchema = Schema
