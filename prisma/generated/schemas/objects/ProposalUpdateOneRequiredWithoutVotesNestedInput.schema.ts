import { z } from 'zod';
import { ProposalCreateWithoutVotesInputObjectSchema } from './ProposalCreateWithoutVotesInput.schema';
import { ProposalUncheckedCreateWithoutVotesInputObjectSchema } from './ProposalUncheckedCreateWithoutVotesInput.schema';
import { ProposalCreateOrConnectWithoutVotesInputObjectSchema } from './ProposalCreateOrConnectWithoutVotesInput.schema';
import { ProposalUpsertWithoutVotesInputObjectSchema } from './ProposalUpsertWithoutVotesInput.schema';
import { ProposalWhereUniqueInputObjectSchema } from './ProposalWhereUniqueInput.schema';
import { ProposalUpdateWithoutVotesInputObjectSchema } from './ProposalUpdateWithoutVotesInput.schema';
import { ProposalUncheckedUpdateWithoutVotesInputObjectSchema } from './ProposalUncheckedUpdateWithoutVotesInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => ProposalCreateWithoutVotesInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutVotesInputObjectSchema)]).optional(),connectOrCreate: z.lazy(() => ProposalCreateOrConnectWithoutVotesInputObjectSchema).optional(),upsert: z.lazy(() => ProposalUpsertWithoutVotesInputObjectSchema).optional(),connect: z.lazy(() => ProposalWhereUniqueInputObjectSchema).optional(),update: z.union([z.lazy(() => ProposalUpdateWithoutVotesInputObjectSchema),
z.lazy(() => ProposalUncheckedUpdateWithoutVotesInputObjectSchema)]).optional()
}).strict();

 export const ProposalUpdateOneRequiredWithoutVotesNestedInputObjectSchema = Schema
