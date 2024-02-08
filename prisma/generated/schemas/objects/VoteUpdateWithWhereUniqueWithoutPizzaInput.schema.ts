import { z } from 'zod';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithoutPizzaInputObjectSchema } from './VoteUpdateWithoutPizzaInput.schema';
import { VoteUncheckedUpdateWithoutPizzaInputObjectSchema } from './VoteUncheckedUpdateWithoutPizzaInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),data: z.union([z.lazy(() => VoteUpdateWithoutPizzaInputObjectSchema),
z.lazy(() => VoteUncheckedUpdateWithoutPizzaInputObjectSchema)])
}).strict();

 export const VoteUpdateWithWhereUniqueWithoutPizzaInputObjectSchema = Schema
