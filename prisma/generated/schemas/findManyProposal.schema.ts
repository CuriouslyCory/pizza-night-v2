import { z } from 'zod';
import { ProposalOrderByWithRelationInputObjectSchema } from './objects/ProposalOrderByWithRelationInput.schema';
import { ProposalWhereInputObjectSchema } from './objects/ProposalWhereInput.schema';
import { ProposalWhereUniqueInputObjectSchema } from './objects/ProposalWhereUniqueInput.schema';
import { ProposalScalarFieldEnumSchema } from './enums/ProposalScalarFieldEnum.schema'

export const ProposalFindManySchema = z.object({   orderBy: z.union([ProposalOrderByWithRelationInputObjectSchema, ProposalOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProposalWhereInputObjectSchema.optional(), cursor: ProposalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProposalScalarFieldEnumSchema).optional()  })