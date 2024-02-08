import { z } from 'zod';
import { ToppingWhereUniqueInputObjectSchema } from './ToppingWhereUniqueInput.schema';
import { ToppingUpdateWithoutCreatedByInputObjectSchema } from './ToppingUpdateWithoutCreatedByInput.schema';
import { ToppingUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ToppingUncheckedUpdateWithoutCreatedByInput.schema';
import { ToppingCreateWithoutCreatedByInputObjectSchema } from './ToppingCreateWithoutCreatedByInput.schema';
import { ToppingUncheckedCreateWithoutCreatedByInputObjectSchema } from './ToppingUncheckedCreateWithoutCreatedByInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => ToppingWhereUniqueInputObjectSchema),update: z.union([z.lazy(() => ToppingUpdateWithoutCreatedByInputObjectSchema),
z.lazy(() => ToppingUncheckedUpdateWithoutCreatedByInputObjectSchema)]),create: z.union([z.lazy(() => ToppingCreateWithoutCreatedByInputObjectSchema),
z.lazy(() => ToppingUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();

 export const ToppingUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
