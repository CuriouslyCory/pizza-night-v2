import { z } from 'zod';


import type { Prisma } from '@prisma/client';

const Schema = z.object({
  set: z.string().optional().nullable()
}).strict();

 export const NullableStringFieldUpdateOperationsInputObjectSchema = Schema
