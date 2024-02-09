import { z } from "zod";
import { ProposalCreateManyCreatedByInputObjectSchema } from "./ProposalCreateManyCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    data: z.union([
      z.lazy(() => ProposalCreateManyCreatedByInputObjectSchema),
      z.lazy(() => ProposalCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProposalCreateManyCreatedByInputEnvelopeObjectSchema = Schema;
