import { z } from 'zod';

export const CategorySchema = z.enum(["sauce","cheese","vegetable","fruit","meat","grain","finishingSauce","other"])