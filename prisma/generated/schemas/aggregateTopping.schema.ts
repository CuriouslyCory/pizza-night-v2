import { z } from "zod";
import { ToppingOrderByWithRelationInputObjectSchema } from "./objects/ToppingOrderByWithRelationInput.schema";
import { ToppingWhereInputObjectSchema } from "./objects/ToppingWhereInput.schema";
import { ToppingWhereUniqueInputObjectSchema } from "./objects/ToppingWhereUniqueInput.schema";
import { ToppingCountAggregateInputObjectSchema } from "./objects/ToppingCountAggregateInput.schema";
import { ToppingMinAggregateInputObjectSchema } from "./objects/ToppingMinAggregateInput.schema";
import { ToppingMaxAggregateInputObjectSchema } from "./objects/ToppingMaxAggregateInput.schema";

export const ToppingAggregateSchema = z.object({
  orderBy: z
    .union([
      ToppingOrderByWithRelationInputObjectSchema,
      ToppingOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ToppingWhereInputObjectSchema.optional(),
  cursor: ToppingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ToppingCountAggregateInputObjectSchema])
    .optional(),
  _min: ToppingMinAggregateInputObjectSchema.optional(),
  _max: ToppingMaxAggregateInputObjectSchema.optional(),
});
