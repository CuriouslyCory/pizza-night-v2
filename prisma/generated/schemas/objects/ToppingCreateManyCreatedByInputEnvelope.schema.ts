import { z } from 'zod';
import { ToppingCreateManyCreatedByInputObjectSchema } from './ToppingCreateManyCreatedByInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  data: z.union([z.lazy(() => ToppingCreateManyCreatedByInputObjectSchema),
z.lazy(() => ToppingCreateManyCreatedByInputObjectSchema).array()]),skipDuplicates: z.boolean().optional()
}).strict();

 export const ToppingCreateManyCreatedByInputEnvelopeObjectSchema = Schema
