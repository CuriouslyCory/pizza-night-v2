import { z } from 'zod';
import { UserCreateNestedOneWithoutPostsInputObjectSchema } from './UserCreateNestedOneWithoutPostsInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  name: z.string(),createdAt: z.coerce.date().optional(),updatedAt: z.coerce.date().optional(),createdBy: z.lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema)
}).strict();

 export const PostCreateInputObjectSchema = Schema
