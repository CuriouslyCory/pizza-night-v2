import { z } from 'zod';
import { ToppingScalarWhereInputObjectSchema } from './ToppingScalarWhereInput.schema';
import { ToppingUpdateManyMutationInputObjectSchema } from './ToppingUpdateManyMutationInput.schema';
import { ToppingUncheckedUpdateManyWithoutToppingsInputObjectSchema } from './ToppingUncheckedUpdateManyWithoutToppingsInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => ToppingScalarWhereInputObjectSchema),data: z.union([z.lazy(() => ToppingUpdateManyMutationInputObjectSchema),
z.lazy(() => ToppingUncheckedUpdateManyWithoutToppingsInputObjectSchema)])
}).strict();

 export const ToppingUpdateManyWithWhereWithoutPizzaInputObjectSchema = Schema
