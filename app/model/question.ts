import { z } from "zod";

export const questionSchema = z.object({
  id: z.string().uuid(),
  question: z.string(),
  answer: z.boolean(),
});

export type Question = z.infer<typeof questionSchema>;
