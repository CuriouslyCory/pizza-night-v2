import { z } from "zod";
import { ProposalWhereInputObjectSchema } from "./objects/ProposalWhereInput.schema";
import { ProposalOrderByWithAggregationInputObjectSchema } from "./objects/ProposalOrderByWithAggregationInput.schema";
import { ProposalScalarWhereWithAggregatesInputObjectSchema } from "./objects/ProposalScalarWhereWithAggregatesInput.schema";
import { ProposalScalarFieldEnumSchema } from "./enums/ProposalScalarFieldEnum.schema";

export const ProposalGroupBySchema = z.object({
  where: ProposalWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProposalOrderByWithAggregationInputObjectSchema,
      ProposalOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProposalScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProposalScalarFieldEnumSchema),
});
