import { z } from 'zod';
import { ProposalCreateManyInputObjectSchema } from './objects/ProposalCreateManyInput.schema'

export const ProposalCreateManySchema = z.object({ data: z.union([ ProposalCreateManyInputObjectSchema, z.array(ProposalCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })