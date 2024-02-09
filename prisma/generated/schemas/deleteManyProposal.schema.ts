import { z } from "zod";
import { ProposalWhereInputObjectSchema } from "./objects/ProposalWhereInput.schema";

export const ProposalDeleteManySchema = z.object({
  where: ProposalWhereInputObjectSchema.optional(),
});
