import { z } from "zod";
import { ProposalCreateInputObjectSchema } from "./objects/ProposalCreateInput.schema";
import { ProposalUncheckedCreateInputObjectSchema } from "./objects/ProposalUncheckedCreateInput.schema";

export const ProposalCreateOneSchema = z.object({
  data: z.union([
    ProposalCreateInputObjectSchema,
    ProposalUncheckedCreateInputObjectSchema,
  ]),
});
