import { z } from 'zod';
import { ProposalCreateWithoutVotesInputObjectSchema } from './ProposalCreateWithoutVotesInput.schema';
import { ProposalUncheckedCreateWithoutVotesInputObjectSchema } from './ProposalUncheckedCreateWithoutVotesInput.schema';
import { ProposalCreateOrConnectWithoutVotesInputObjectSchema } from './ProposalCreateOrConnectWithoutVotesInput.schema';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => ProposalCreateWithoutVotesInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutVotesInputObjectSchema)]).optional(),connectOrCreate: z.lazy(() => ProposalCreateOrConnectWithoutVotesInputObjectSchema).optional(),connect: z.lazy(() => ProposalWhereUniqueInputObjectSchema).optional()
}).strict();

 export const ProposalCreateNestedOneWithoutVotesInputObjectSchema = Schema
