import { z } from 'zod';
import { ToppingUpdateInputObjectSchema } from './objects/ToppingUpdateInput.schema';
import { ToppingUncheckedUpdateInputObjectSchema } from './objects/ToppingUncheckedUpdateInput.schema';
import { ToppingWhereUniqueInputObjectSchema } from './objects/ToppingWhereUniqueInput.schema'

export const ToppingUpdateOneSchema = z.object({   data: z.union([ToppingUpdateInputObjectSchema, ToppingUncheckedUpdateInputObjectSchema]), where: ToppingWhereUniqueInputObjectSchema  })