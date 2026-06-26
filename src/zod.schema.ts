import { z } from "zod";

export const addBookSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  genre: z.string(),
  isbn: z.string().min(10),
  description: z.string().optional(),
  copies: z.number().min(0),
  available: z.boolean(),
});

export type AddBookFormData = z.infer<typeof addBookSchema>;
