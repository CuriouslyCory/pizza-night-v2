import { z } from 'zod';
import { VoteWhereUniqueInputObjectSchema } from './objects/VoteWhereUniqueInput.schema'

export const VoteFindUniqueSchema = z.object({   where: VoteWhereUniqueInputObjectSchema })