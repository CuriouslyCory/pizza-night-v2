import { z } from 'zod';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithoutPizzaInputObjectSchema } from './VoteUpdateWithoutPizzaInput.schema';
import { VoteUncheckedUpdateWithoutPizzaInputObjectSchema } from './VoteUncheckedUpdateWithoutPizzaInput.schema';
import { VoteCreateWithoutPizzaInputObjectSchema } from './VoteCreateWithoutPizzaInput.schema';
import { VoteUncheckedCreateWithoutPizzaInputObjectSchema } from './VoteUncheckedCreateWithoutPizzaInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),update: z.union([z.lazy(() => VoteUpdateWithoutPizzaInputObjectSchema),
z.lazy(() => VoteUncheckedUpdateWithoutPizzaInputObjectSchema)]),create: z.union([z.lazy(() => VoteCreateWithoutPizzaInputObjectSchema),
z.lazy(() => VoteUncheckedCreateWithoutPizzaInputObjectSchema)])
}).strict();

 export const VoteUpsertWithWhereUniqueWithoutPizzaInputObjectSchema = Schema
