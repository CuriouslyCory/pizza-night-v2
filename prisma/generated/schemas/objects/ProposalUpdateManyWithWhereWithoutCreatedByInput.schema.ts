import { z } from "zod";
import { ProposalScalarWhereInputObjectSchema } from "./ProposalScalarWhereInput.schema";
import { ProposalUpdateManyMutationInputObjectSchema } from "./ProposalUpdateManyMutationInput.schema";
import { ProposalUncheckedUpdateManyWithoutProposalCreatorInputObjectSchema } from "./ProposalUncheckedUpdateManyWithoutProposalCreatorInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => ProposalScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ProposalUpdateManyMutationInputObjectSchema),
      z.lazy(
        () =>
          ProposalUncheckedUpdateManyWithoutProposalCreatorInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ProposalUpdateManyWithWhereWithoutCreatedByInputObjectSchema =
  Schema;
