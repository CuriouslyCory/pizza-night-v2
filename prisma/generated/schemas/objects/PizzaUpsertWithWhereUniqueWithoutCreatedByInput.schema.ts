import { z } from 'zod';
import { PizzaWhereUniqueInputObjectSchema } from './PizzaWhereUniqueInput.schema';
import { PizzaUpdateWithoutCreatedByInputObjectSchema } from './PizzaUpdateWithoutCreatedByInput.schema';
import { PizzaUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PizzaUncheckedUpdateWithoutCreatedByInput.schema';
import { PizzaCreateWithoutCreatedByInputObjectSchema } from './PizzaCreateWithoutCreatedByInput.schema';
import { PizzaUncheckedCreateWithoutCreatedByInputObjectSchema } from './PizzaUncheckedCreateWithoutCreatedByInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => PizzaWhereUniqueInputObjectSchema),update: z.union([z.lazy(() => PizzaUpdateWithoutCreatedByInputObjectSchema),
z.lazy(() => PizzaUncheckedUpdateWithoutCreatedByInputObjectSchema)]),create: z.union([z.lazy(() => PizzaCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => PizzaUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();

 export const PizzaUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
