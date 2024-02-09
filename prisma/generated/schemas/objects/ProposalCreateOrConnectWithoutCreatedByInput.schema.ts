import { z } from "zod";
import { ProposalWhereUniqueInputObjectSchema } from "./ProposalWhereUniqueInput.schema";
import { ProposalCreateWithoutCreatedByInputObjectSchema } from "./ProposalCreateWithoutCreatedByInput.schema";
import { ProposalUncheckedCreateWithoutCreatedByInputObjectSchema } from "./ProposalUncheckedCreateWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => ProposalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProposalCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ProposalUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ProposalCreateOrConnectWithoutCreatedByInputObjectSchema = Schema;
