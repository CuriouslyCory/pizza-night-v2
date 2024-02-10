import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { PostListRelationFilterObjectSchema } from './PostListRelationFilter.schema';
import { PizzaListRelationFilterObjectSchema } from './PizzaListRelationFilter.schema';
import { ToppingListRelationFilterObjectSchema } from './ToppingListRelationFilter.schema';
import { VoteListRelationFilterObjectSchema } from './VoteListRelationFilter.schema';
import { ProposalListRelationFilterObjectSchema } from './ProposalListRelationFilter.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema),
z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),NOT: z.union([z.lazy(() => UserWhereInputObjectSchema),
z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),id: z.union([z.lazy(() => StringFilterObjectSchema),
z.string()]).optional(),name: z.union([z.lazy(() => StringNullableFilterObjectSchema),
z.string()]).optional().nullable(),email: z.union([z.lazy(() => StringNullableFilterObjectSchema),
z.string()]).optional().nullable(),emailVerified: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema),
z.coerce.date()]).optional().nullable(),image: z.union([z.lazy(() => StringNullableFilterObjectSchema),
z.string()]).optional().nullable(),accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),posts: z.lazy(() => PostListRelationFilterObjectSchema).optional(),pizza: z.lazy(() => PizzaListRelationFilterObjectSchema).optional(),topping: z.lazy(() => ToppingListRelationFilterObjectSchema).optional(),vote: z.lazy(() => VoteListRelationFilterObjectSchema).optional(),proposalCreator: z.lazy(() => ProposalListRelationFilterObjectSchema).optional(),proposalParticipant: z.lazy(() => ProposalListRelationFilterObjectSchema).optional()
}).strict();

 export const UserWhereInputObjectSchema = Schema
