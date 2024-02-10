import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategorySchema } from '../enums/Category.schema';
import { EnumCategoryFieldUpdateOperationsInputObjectSchema } from './EnumCategoryFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PizzaUncheckedUpdateManyWithoutToppingsNestedInputObjectSchema } from './PizzaUncheckedUpdateManyWithoutToppingsNestedInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  id: z.union([z.string(),
z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),name: z.union([z.string(),
z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),category: z.union([z.lazy(() => CategorySchema),
z.lazy(() => EnumCategoryFieldUpdateOperationsInputObjectSchema)]).optional(),createdById: z.union([z.string(),
z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),approved: z.union([z.boolean(),
z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),createdAt: z.union([z.coerce.date(),
z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),updatedAt: z.union([z.coerce.date(),
z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),Pizza: z.lazy(() => PizzaUncheckedUpdateManyWithoutToppingsNestedInputObjectSchema).optional()
}).strict();

 export const ToppingUncheckedUpdateInputObjectSchema = Schema
