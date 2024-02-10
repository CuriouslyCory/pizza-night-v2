import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutVoteNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutVoteNestedInput.schema';
import { ProposalUpdateOneRequiredWithoutVotesNestedInputObjectSchema } from './ProposalUpdateOneRequiredWithoutVotesNestedInput.schema';
import { PizzaUpdateOneWithoutVoteNestedInputObjectSchema } from './PizzaUpdateOneWithoutVoteNestedInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.union([z.string(),
z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),user: z.lazy(() => UserUpdateOneRequiredWithoutVoteNestedInputObjectSchema).optional(),proposal: z.lazy(() => ProposalUpdateOneRequiredWithoutVotesNestedInputObjectSchema).optional(),pizza: z.lazy(() => PizzaUpdateOneWithoutVoteNestedInputObjectSchema).optional()
}).strict();

 export const VoteUpdateInputObjectSchema = Schema
