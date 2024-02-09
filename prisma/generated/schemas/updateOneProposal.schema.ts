import { z } from "zod";
import { ProposalUpdateInputObjectSchema } from "./objects/ProposalUpdateInput.schema";
import { ProposalUncheckedUpdateInputObjectSchema } from "./objects/ProposalUncheckedUpdateInput.schema";
import { ProposalWhereUniqueInputObjectSchema } from "./objects/ProposalWhereUniqueInput.schema";

export const ProposalUpdateOneSchema = z.object({
  data: z.union([
    ProposalUpdateInputObjectSchema,
    ProposalUncheckedUpdateInputObjectSchema,
  ]),
  where: ProposalWhereUniqueInputObjectSchema,
});
