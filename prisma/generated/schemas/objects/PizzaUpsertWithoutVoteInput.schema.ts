import { z } from 'zod';
import { PizzaUpdateWithoutVoteInputObjectSchema } from './PizzaUpdateWithoutVoteInput.schema';
import { PizzaUncheckedUpdateWithoutVoteInputObjectSchema } from './PizzaUncheckedUpdateWithoutVoteInput.schema';
import { PizzaCreateWithoutVoteInputObjectSchema } from './PizzaCreateWithoutVoteInput.schema';
import { PizzaUncheckedCreateWithoutVoteInputObjectSchema } from './PizzaUncheckedCreateWithoutVoteInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  update: z.union([z.lazy(() => PizzaUpdateWithoutVoteInputObjectSchema),
z.lazy(() => PizzaUncheckedUpdateWithoutVoteInputObjectSchema)]),create: z.union([z.lazy(() => PizzaCreateWithoutVoteInputObjectSchema),
z.lazy(() => PizzaUncheckedCreateWithoutVoteInputObjectSchema)])
}).strict();

 export const PizzaUpsertWithoutVoteInputObjectSchema = Schema
