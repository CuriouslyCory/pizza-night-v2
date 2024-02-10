import { z } from 'zod';
import { ToppingWhereUniqueInputObjectSchema } from './ToppingWhereUniqueInput.schema';
import { ToppingUpdateWithoutPizzaInputObjectSchema } from './ToppingUpdateWithoutPizzaInput.schema';
import { ToppingUncheckedUpdateWithoutPizzaInputObjectSchema } from './ToppingUncheckedUpdateWithoutPizzaInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => ToppingWhereUniqueInputObjectSchema),data: z.union([z.lazy(() => ToppingUpdateWithoutPizzaInputObjectSchema),
z.lazy(() => ToppingUncheckedUpdateWithoutPizzaInputObjectSchema)])
}).strict();

 export const ToppingUpdateWithWhereUniqueWithoutPizzaInputObjectSchema = Schema
