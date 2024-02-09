import { z } from "zod";
import { ProposalWhereUniqueInputObjectSchema } from "./ProposalWhereUniqueInput.schema";
import { ProposalCreateWithoutVotesInputObjectSchema } from "./ProposalCreateWithoutVotesInput.schema";
import { ProposalUncheckedCreateWithoutVotesInputObjectSchema } from "./ProposalUncheckedCreateWithoutVotesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema = z
  .object({
    where: z.lazy(() => ProposalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProposalCreateWithoutVotesInputObjectSchema),
      z.lazy(() => ProposalUncheckedCreateWithoutVotesInputObjectSchema),
    ]),
  })
  .strict();

export const ProposalCreateOrConnectWithoutVotesInputObjectSchema = Schema;
