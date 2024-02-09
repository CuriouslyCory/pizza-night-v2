import { z } from "zod";
import { VoteWhereUniqueInputObjectSchema } from "./VoteWhereUniqueInput.schema";
import { VoteUpdateWithoutProposalInputObjectSchema } from "./VoteUpdateWithoutProposalInput.schema";
import { VoteUncheckedUpdateWithoutProposalInputObjectSchema } from "./VoteUncheckedUpdateWithoutProposalInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VoteUpdateWithoutProposalInputObjectSchema),
      z.lazy(() => VoteUncheckedUpdateWithoutProposalInputObjectSchema),
    ]),
  })
  .strict();

export const VoteUpdateWithWhereUniqueWithoutProposalInputObjectSchema = Schema;
