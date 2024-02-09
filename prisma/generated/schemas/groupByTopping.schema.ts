import { z } from "zod";
import { ToppingWhereInputObjectSchema } from "./objects/ToppingWhereInput.schema";
import { ToppingOrderByWithAggregationInputObjectSchema } from "./objects/ToppingOrderByWithAggregationInput.schema";
import { ToppingScalarWhereWithAggregatesInputObjectSchema } from "./objects/ToppingScalarWhereWithAggregatesInput.schema";
import { ToppingScalarFieldEnumSchema } from "./enums/ToppingScalarFieldEnum.schema";

export const ToppingGroupBySchema = z.object({
  where: ToppingWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ToppingOrderByWithAggregationInputObjectSchema,
      ToppingOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ToppingScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ToppingScalarFieldEnumSchema),
});
