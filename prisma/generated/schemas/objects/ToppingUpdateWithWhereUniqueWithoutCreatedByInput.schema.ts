import { z } from 'zod';
import { ToppingWhereUniqueInputObjectSchema } from './ToppingWhereUniqueInput.schema';
import { ToppingUpdateWithoutCreatedByInputObjectSchema } from './ToppingUpdateWithoutCreatedByInput.schema';
import { ToppingUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ToppingUncheckedUpdateWithoutCreatedByInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => ToppingWhereUniqueInputObjectSchema),data: z.union([z.lazy(() => ToppingUpdateWithoutCreatedByInputObjectSchema),
z.lazy(() => ToppingUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();

 export const ToppingUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
