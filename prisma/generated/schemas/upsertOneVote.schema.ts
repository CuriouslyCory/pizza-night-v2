import { z } from "zod";
import { VoteWhereUniqueInputObjectSchema } from "./objects/VoteWhereUniqueInput.schema";
import { VoteCreateInputObjectSchema } from "./objects/VoteCreateInput.schema";
import { VoteUncheckedCreateInputObjectSchema } from "./objects/VoteUncheckedCreateInput.schema";
import { VoteUpdateInputObjectSchema } from "./objects/VoteUpdateInput.schema";
import { VoteUncheckedUpdateInputObjectSchema } from "./objects/VoteUncheckedUpdateInput.schema";

export const VoteUpsertSchema = z.object({
  where: VoteWhereUniqueInputObjectSchema,
  create: z.union([
    VoteCreateInputObjectSchema,
    VoteUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    VoteUpdateInputObjectSchema,
    VoteUncheckedUpdateInputObjectSchema,
  ]),
});
