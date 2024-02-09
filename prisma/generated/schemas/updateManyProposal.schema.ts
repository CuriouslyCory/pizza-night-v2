import { z } from "zod";
import { ProposalUpdateManyMutationInputObjectSchema } from "./objects/ProposalUpdateManyMutationInput.schema";
import { ProposalWhereInputObjectSchema } from "./objects/ProposalWhereInput.schema";

export const ProposalUpdateManySchema = z.object({
  data: ProposalUpdateManyMutationInputObjectSchema,
  where: ProposalWhereInputObjectSchema.optional(),
});
