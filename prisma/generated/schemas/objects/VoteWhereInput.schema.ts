import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProposalRelationFilterObjectSchema } from './ProposalRelationFilter.schema';
import { ProposalWhereInputObjectSchema } from './ProposalWhereInput.schema';
import { PizzaRelationFilterObjectSchema } from './PizzaRelationFilter.schema';
import { PizzaWhereInputObjectSchema } from './PizzaWhereInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  AND: z.union([z.lazy(() => VoteWhereInputObjectSchema),
z.lazy(() => VoteWhereInputObjectSchema).array()]).optional(),OR: z.lazy(() => VoteWhereInputObjectSchema).array().optional(),NOT: z.union([z.lazy(() => VoteWhereInputObjectSchema),
z.lazy(() => VoteWhereInputObjectSchema).array()]).optional(),id: z.union([z.lazy(() => StringFilterObjectSchema),
z.string()]).optional(),userId: z.union([z.lazy(() => StringFilterObjectSchema),
z.string()]).optional(),proposalId: z.union([z.lazy(() => StringFilterObjectSchema),
z.string()]).optional(),pizzaId: z.union([z.lazy(() => StringNullableFilterObjectSchema),
z.string()]).optional().nullable(),user: z.union([z.lazy(() => UserRelationFilterObjectSchema),
z.lazy(() => UserWhereInputObjectSchema)]).optional(),proposal: z.union([z.lazy(() => ProposalRelationFilterObjectSchema),
z.lazy(() => ProposalWhereInputObjectSchema)]).optional(),pizza: z.union([z.lazy(() => PizzaRelationFilterObjectSchema),
z.lazy(() => PizzaWhereInputObjectSchema)]).optional().nullable()
}).strict();

 export const VoteWhereInputObjectSchema = Schema
