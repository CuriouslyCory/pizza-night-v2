import { z } from 'zod';
import { ProposalUpdateWithoutVotesInputObjectSchema } from './ProposalUpdateWithoutVotesInput.schema';
import { ProposalUncheckedUpdateWithoutVotesInputObjectSchema } from './ProposalUncheckedUpdateWithoutVotesInput.schema';
import { ProposalCreateWithoutVotesInputObjectSchema } from './ProposalCreateWithoutVotesInput.schema';
import { ProposalUncheckedCreateWithoutVotesInputObjectSchema } from './ProposalUncheckedCreateWithoutVotesInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  update: z.union([z.lazy(() => ProposalUpdateWithoutVotesInputObjectSchema),
z.lazy(() => ProposalUncheckedUpdateWithoutVotesInputObjectSchema)]),create: z.union([z.lazy(() => ProposalCreateWithoutVotesInputObjectSchema),
z.lazy(() => ProposalUncheckedCreateWithoutVotesInputObjectSchema)])
}).strict();

 export const ProposalUpsertWithoutVotesInputObjectSchema = Schema
