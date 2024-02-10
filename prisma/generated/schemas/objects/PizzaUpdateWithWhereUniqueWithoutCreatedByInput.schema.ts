import { z } from 'zod';
import { PizzaWhereUniqueInputObjectSchema } from './PizzaWhereUniqueInput.schema';
import { PizzaUpdateWithoutCreatedByInputObjectSchema } from './PizzaUpdateWithoutCreatedByInput.schema';
import { PizzaUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PizzaUncheckedUpdateWithoutCreatedByInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => PizzaWhereUniqueInputObjectSchema),data: z.union([z.lazy(() => PizzaUpdateWithoutCreatedByInputObjectSchema),
z.lazy(() => PizzaUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();

 export const PizzaUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
