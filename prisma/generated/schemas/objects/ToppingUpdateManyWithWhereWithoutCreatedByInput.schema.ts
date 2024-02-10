import { z } from 'zod';
import { ToppingScalarWhereInputObjectSchema } from './ToppingScalarWhereInput.schema';
import { ToppingUpdateManyMutationInputObjectSchema } from './ToppingUpdateManyMutationInput.schema';
import { ToppingUncheckedUpdateManyWithoutToppingInputObjectSchema } from './ToppingUncheckedUpdateManyWithoutToppingInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => ToppingScalarWhereInputObjectSchema),data: z.union([z.lazy(() => ToppingUpdateManyMutationInputObjectSchema),
z.lazy(() => ToppingUncheckedUpdateManyWithoutToppingInputObjectSchema)])
}).strict();

 export const ToppingUpdateManyWithWhereWithoutCreatedByInputObjectSchema = Schema
