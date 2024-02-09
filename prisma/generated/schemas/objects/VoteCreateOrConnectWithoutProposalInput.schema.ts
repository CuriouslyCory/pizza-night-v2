import { z } from "zod";
import { VoteWhereUniqueInputObjectSchema } from "./VoteWhereUniqueInput.schema";
import { VoteCreateWithoutProposalInputObjectSchema } from "./VoteCreateWithoutProposalInput.schema";
import { VoteUncheckedCreateWithoutProposalInputObjectSchema } from "./VoteUncheckedCreateWithoutProposalInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VoteCreateWithoutProposalInputObjectSchema),
      z.lazy(() => VoteUncheckedCreateWithoutProposalInputObjectSchema),
    ]),
  })
  .strict();

export const VoteCreateOrConnectWithoutProposalInputObjectSchema = Schema;
