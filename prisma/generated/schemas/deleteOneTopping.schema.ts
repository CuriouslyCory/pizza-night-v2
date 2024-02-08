import { z } from 'zod';
import { ToppingWhereUniqueInputObjectSchema } from './objects/ToppingWhereUniqueInput.schema'

export const ToppingDeleteOneSchema = z.object({   where: ToppingWhereUniqueInputObjectSchema  })