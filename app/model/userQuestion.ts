import { z } from "zod";
import { questionSchema } from "./question";

export const userQuestionSchema = z.object({
  id: z.string().uuid(),
  question: questionSchema,
  userAnswer: z.boolean().nullable(),
});

export type UserQuestion = z.infer<typeof userQuestionSchema>;
