import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    userId: z.string(),
    proposalId: z.string(),
  })
  .strict();

export const VoteOneVotePerUserPerProposalCompoundUniqueInputObjectSchema =
  Schema;
