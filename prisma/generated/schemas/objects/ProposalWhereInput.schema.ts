import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { VoteListRelationFilterObjectSchema } from './VoteListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  AND: z.union([z.lazy(() => ProposalWhereInputObjectSchema),
z.lazy(() => ProposalWhereInputObjectSchema).array()]).optional(),OR: z.lazy(() => ProposalWhereInputObjectSchema).array().optional(),NOT: z.union([z.lazy(() => ProposalWhereInputObjectSchema),
z.lazy(() => ProposalWhereInputObjectSchema).array()]).optional(),id: z.union([z.lazy(() => StringFilterObjectSchema),
z.string()]).optional(),createdBy: z.union([z.lazy(() => StringFilterObjectSchema),
z.string()]).optional(),createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
z.coerce.date()]).optional(),expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
z.coerce.date()]).optional(),creator: z.union([z.lazy(() => UserRelationFilterObjectSchema),
z.lazy(() => UserWhereInputObjectSchema)]).optional(),votes: z.lazy(() => VoteListRelationFilterObjectSchema).optional(),participants: z.lazy(() => UserListRelationFilterObjectSchema).optional()
}).strict();

 export const ProposalWhereInputObjectSchema = Schema
