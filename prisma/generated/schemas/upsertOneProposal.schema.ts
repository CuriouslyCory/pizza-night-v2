import { z } from "zod";
import { ProposalWhereUniqueInputObjectSchema } from "./objects/ProposalWhereUniqueInput.schema";
import { ProposalCreateInputObjectSchema } from "./objects/ProposalCreateInput.schema";
import { ProposalUncheckedCreateInputObjectSchema } from "./objects/ProposalUncheckedCreateInput.schema";
import { ProposalUpdateInputObjectSchema } from "./objects/ProposalUpdateInput.schema";
import { ProposalUncheckedUpdateInputObjectSchema } from "./objects/ProposalUncheckedUpdateInput.schema";

export const ProposalUpsertSchema = z.object({
  where: ProposalWhereUniqueInputObjectSchema,
  create: z.union([
    ProposalCreateInputObjectSchema,
    ProposalUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProposalUpdateInputObjectSchema,
    ProposalUncheckedUpdateInputObjectSchema,
  ]),
});
