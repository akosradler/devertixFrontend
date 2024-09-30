import { z } from "zod";

export const userAnswerSchema = z.object({
  questionId: z.string().uuid(),
  answer: z.boolean().nullable(),
});

export type UserAnswer = z.infer<typeof userAnswerSchema>;
