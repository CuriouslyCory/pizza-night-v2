import { z } from 'zod';
import { ToppingOrderByWithRelationInputObjectSchema } from './objects/ToppingOrderByWithRelationInput.schema';
import { ToppingWhereInputObjectSchema } from './objects/ToppingWhereInput.schema';
import { ToppingWhereUniqueInputObjectSchema } from './objects/ToppingWhereUniqueInput.schema';
import { ToppingScalarFieldEnumSchema } from './enums/ToppingScalarFieldEnum.schema'

export const ToppingFindFirstSchema = z.object({   orderBy: z.union([ToppingOrderByWithRelationInputObjectSchema, ToppingOrderByWithRelationInputObjectSchema.array()]).optional(), where: ToppingWhereInputObjectSchema.optional(), cursor: ToppingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ToppingScalarFieldEnumSchema).optional() })