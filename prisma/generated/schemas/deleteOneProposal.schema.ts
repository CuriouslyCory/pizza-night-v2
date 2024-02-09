import { z } from "zod";
import { ProposalWhereUniqueInputObjectSchema } from "./objects/ProposalWhereUniqueInput.schema";

export const ProposalDeleteOneSchema = z.object({
  where: ProposalWhereUniqueInputObjectSchema,
});
