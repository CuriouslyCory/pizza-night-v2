import { z } from 'zod';
import { PostCreateManyCreatedByInputObjectSchema } from './PostCreateManyCreatedByInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  data: z.union([z.lazy(() => PostCreateManyCreatedByInputObjectSchema),
z.lazy(() => PostCreateManyCreatedByInputObjectSchema).array()]),skipDuplicates: z.boolean().optional()
}).strict();

 export const PostCreateManyCreatedByInputEnvelopeObjectSchema = Schema
