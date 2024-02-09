import { z } from "zod";
import { VoteUpdateInputObjectSchema } from "./objects/VoteUpdateInput.schema";
import { VoteUncheckedUpdateInputObjectSchema } from "./objects/VoteUncheckedUpdateInput.schema";
import { VoteWhereUniqueInputObjectSchema } from "./objects/VoteWhereUniqueInput.schema";

export const VoteUpdateOneSchema = z.object({
  data: z.union([
    VoteUpdateInputObjectSchema,
    VoteUncheckedUpdateInputObjectSchema,
  ]),
  where: VoteWhereUniqueInputObjectSchema,
});
