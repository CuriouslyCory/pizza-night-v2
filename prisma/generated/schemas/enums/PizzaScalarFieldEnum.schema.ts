import { z } from "zod";

export const PizzaScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "createdById",
  "createdAt",
  "updatedAt",
]);
