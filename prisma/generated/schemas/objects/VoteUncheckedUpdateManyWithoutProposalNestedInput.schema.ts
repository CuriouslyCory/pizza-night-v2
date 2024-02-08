import { z } from 'zod';
import { VoteCreateWithoutProposalInputObjectSchema } from './VoteCreateWithoutProposalInput.schema';
import { VoteUncheckedCreateWithoutProposalInputObjectSchema } from './VoteUncheckedCreateWithoutProposalInput.schema';
import { VoteCreateOrConnectWithoutProposalInputObjectSchema } from './VoteCreateOrConnectWithoutProposalInput.schema';
import { VoteUpsertWithWhereUniqueWithoutProposalInputObjectSchema } from './VoteUpsertWithWhereUniqueWithoutProposalInput.schema';
import { VoteCreateManyProposalInputEnvelopeObjectSchema } from './VoteCreateManyProposalInputEnvelope.schema';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithWhereUniqueWithoutProposalInputObjectSchema } from './VoteUpdateWithWhereUniqueWithoutProposalInput.schema';
import { VoteUpdateManyWithWhereWithoutProposalInputObjectSchema } from './VoteUpdateManyWithWhereWithoutProposalInput.schema';
import { VoteScalarWhereInputObjectSchema } from './VoteScalarWhereInput.schema'

import type { Prisma } from '@prisma/client';

const Schema = z.object({
  create: z.union([z.lazy(() => VoteCreateWithoutProposalInputObjectSchema),
z.lazy(() => VoteCreateWithoutProposalInputObjectSchema).array(),
z.lazy(() => VoteUncheckedCreateWithoutProposalInputObjectSchema),
z.lazy(() => VoteUncheckedCreateWithoutProposalInputObjectSchema).array()]).optional(),connectOrCreate: z.union([z.lazy(() => VoteCreateOrConnectWithoutProposalInputObjectSchema),
z.lazy(() => VoteCreateOrConnectWithoutProposalInputObjectSchema).array()]).optional(),upsert: z.union([z.lazy(() => VoteUpsertWithWhereUniqueWithoutProposalInputObjectSchema),
z.lazy(() => VoteUpsertWithWhereUniqueWithoutProposalInputObjectSchema).array()]).optional(),createMany: z.lazy(() => VoteCreateManyProposalInputEnvelopeObjectSchema).optional(),set: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema),
z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),disconnect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema),
z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),delete: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema),
z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),connect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema),
z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),update: z.union([z.lazy(() => VoteUpdateWithWhereUniqueWithoutProposalInputObjectSchema),
z.lazy(() => VoteUpdateWithWhereUniqueWithoutProposalInputObjectSchema).array()]).optional(),updateMany: z.union([z.lazy(() => VoteUpdateManyWithWhereWithoutProposalInputObjectSchema),
z.lazy(() => VoteUpdateManyWithWhereWithoutProposalInputObjectSchema).array()]).optional(),deleteMany: z.union([z.lazy(() => VoteScalarWhereInputObjectSchema),
z.lazy(() => VoteScalarWhereInputObjectSchema).array()]).optional()
}).strict();

 export const VoteUncheckedUpdateManyWithoutProposalNestedInputObjectSchema = Schema
