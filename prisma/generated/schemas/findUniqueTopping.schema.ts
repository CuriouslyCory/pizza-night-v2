import { z } from 'zod';
import { ToppingWhereUniqueInputObjectSchema } from './objects/ToppingWhereUniqueInput.schema'

export const ToppingFindUniqueSchema = z.object({   where: ToppingWhereUniqueInputObjectSchema })