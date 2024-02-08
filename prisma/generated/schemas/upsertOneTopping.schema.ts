import { z } from 'zod';
import { ToppingWhereUniqueInputObjectSchema } from './objects/ToppingWhereUniqueInput.schema';
import { ToppingCreateInputObjectSchema } from './objects/ToppingCreateInput.schema';
import { ToppingUncheckedCreateInputObjectSchema } from './objects/ToppingUncheckedCreateInput.schema';
import { ToppingUpdateInputObjectSchema } from './objects/ToppingUpdateInput.schema';
import { ToppingUncheckedUpdateInputObjectSchema } from './objects/ToppingUncheckedUpdateInput.schema'

export const ToppingUpsertSchema = z.object({   where: ToppingWhereUniqueInputObjectSchema, create: z.union([ ToppingCreateInputObjectSchema, ToppingUncheckedCreateInputObjectSchema ]), update: z.union([ ToppingUpdateInputObjectSchema, ToppingUncheckedUpdateInputObjectSchema ])  })