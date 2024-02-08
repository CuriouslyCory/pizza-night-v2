import { z } from 'zod';
import { ProposalOrderByWithRelationInputObjectSchema } from './objects/ProposalOrderByWithRelationInput.schema';
import { ProposalWhereInputObjectSchema } from './objects/ProposalWhereInput.schema';
import { ProposalWhereUniqueInputObjectSchema } from './objects/ProposalWhereUniqueInput.schema';
import { ProposalCountAggregateInputObjectSchema } from './objects/ProposalCountAggregateInput.schema';
import { ProposalMinAggregateInputObjectSchema } from './objects/ProposalMinAggregateInput.schema';
import { ProposalMaxAggregateInputObjectSchema } from './objects/ProposalMaxAggregateInput.schema'

export const ProposalAggregateSchema = z.object({ orderBy: z.union([ProposalOrderByWithRelationInputObjectSchema, ProposalOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProposalWhereInputObjectSchema.optional(), cursor: ProposalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ProposalCountAggregateInputObjectSchema ]).optional(), _min: ProposalMinAggregateInputObjectSchema.optional(), _max: ProposalMaxAggregateInputObjectSchema.optional() })