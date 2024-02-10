import { z } from 'zod';

export const ToppingScalarFieldEnumSchema = z.enum(["id","name","category","createdById","approved","createdAt","updatedAt"])