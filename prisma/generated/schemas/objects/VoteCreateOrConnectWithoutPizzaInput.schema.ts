import { z } from 'zod';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteCreateWithoutPizzaInputObjectSchema } from './VoteCreateWithoutPizzaInput.schema';
import { VoteUncheckedCreateWithoutPizzaInputObjectSchema } from './VoteUncheckedCreateWithoutPizzaInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),create: z.union([z.lazy(() => VoteCreateWithoutPizzaInputObjectSchema),
z.lazy(() => VoteUncheckedCreateWithoutPizzaInputObjectSchema)])
}).strict();

 export const VoteCreateOrConnectWithoutPizzaInputObjectSchema = Schema
