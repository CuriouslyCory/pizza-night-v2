import { z } from 'zod';
import { VoteScalarWhereInputObjectSchema } from './VoteScalarWhereInput.schema';
import { VoteUpdateManyMutationInputObjectSchema } from './VoteUpdateManyMutationInput.schema';
import { VoteUncheckedUpdateManyWithoutVoteInputObjectSchema } from './VoteUncheckedUpdateManyWithoutVoteInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => VoteScalarWhereInputObjectSchema),data: z.union([z.lazy(() => VoteUpdateManyMutationInputObjectSchema),
z.lazy(() => VoteUncheckedUpdateManyWithoutVoteInputObjectSchema)])
}).strict();

 export const VoteUpdateManyWithWhereWithoutPizzaInputObjectSchema = Schema
