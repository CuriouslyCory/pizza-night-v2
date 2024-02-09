import { z } from "zod";
import { ProposalWhereUniqueInputObjectSchema } from "./ProposalWhereUniqueInput.schema";
import { ProposalUpdateWithoutCreatedByInputObjectSchema } from "./ProposalUpdateWithoutCreatedByInput.schema";
import { ProposalUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./ProposalUncheckedUpdateWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => ProposalWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ProposalUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ProposalUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ProposalUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
