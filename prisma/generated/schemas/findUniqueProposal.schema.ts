import { z } from 'zod';
import { ProposalWhereUniqueInputObjectSchema } from './objects/ProposalWhereUniqueInput.schema'

export const ProposalFindUniqueSchema = z.object({   where: ProposalWhereUniqueInputObjectSchema })