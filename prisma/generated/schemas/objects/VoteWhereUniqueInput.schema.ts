import { z } from "zod";
import { VoteOneVotePerUserPerProposalCompoundUniqueInputObjectSchema } from "./VoteOneVotePerUserPerProposalCompoundUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    id: z.string().optional(),
    oneVotePerUserPerProposal: z
      .lazy(() => VoteOneVotePerUserPerProposalCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const VoteWhereUniqueInputObjectSchema = Schema;
