import { z } from 'zod';
import { VoteCreateWithoutProposalInputObjectSchema } from './VoteCreateWithoutProposalInput.schema';
import { VoteUncheckedCreateWithoutProposalInputObjectSchema } from './VoteUncheckedCreateWithoutProposalInput.schema';
import { VoteCreateOrConnectWithoutProposalInputObjectSchema } from './VoteCreateOrConnectWithoutProposalInput.schema';
import { VoteCreateManyProposalInputEnvelopeObjectSchema } from './VoteCreateManyProposalInputEnvelope.schema';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => VoteCreateWithoutProposalInputObjectSchema),
z.lazy(() => VoteCreateWithoutProposalInputObjectSchema).array(),
z.lazy(() => VoteUncheckedCreateWithoutProposalInputObjectSchema),
z.lazy(() => VoteUncheckedCreateWithoutProposalInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => VoteCreateOrConnectWithoutProposalInputObjectSchema),
z.lazy(() => VoteCreateOrConnectWithoutProposalInputObjectSchema).array()]).optional(),createMany: z.lazy(() => VoteCreateManyProposalInputEnvelopeObjectSchema).optional(),connect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema),
z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();

 export const VoteCreateNestedManyWithoutProposalInputObjectSchema = Schema
