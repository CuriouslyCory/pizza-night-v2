import { z } from 'zod';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithoutProposalInputObjectSchema } from './VoteUpdateWithoutProposalInput.schema';
import { VoteUncheckedUpdateWithoutProposalInputObjectSchema } from './VoteUncheckedUpdateWithoutProposalInput.schema';
import { VoteCreateWithoutProposalInputObjectSchema } from './VoteCreateWithoutProposalInput.schema';
import { VoteUncheckedCreateWithoutProposalInputObjectSchema } from './VoteUncheckedCreateWithoutProposalInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),update: z.union([z.lazy(() => VoteUpdateWithoutProposalInputObjectSchema),
z.lazy(() => VoteUncheckedUpdateWithoutProposalInputObjectSchema)]),create: z.union([z.lazy(() => VoteCreateWithoutProposalInputObjectSchema),
z.lazy(() => VoteUncheckedCreateWithoutProposalInputObjectSchema)])
}).strict();

 export const VoteUpsertWithWhereUniqueWithoutProposalInputObjectSchema = Schema
