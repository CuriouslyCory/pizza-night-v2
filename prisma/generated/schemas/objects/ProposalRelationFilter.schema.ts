import { z } from "zod";
import { ProposalWhereInputObjectSchema } from "./ProposalWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    is: z.lazy(() => ProposalWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ProposalWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProposalRelationFilterObjectSchema = Schema;
