import { z } from "zod";

export const userAnswersSchema = z.record(z.string(), z.boolean().nullable());

export type UserAnswers = z.infer<typeof userAnswersSchema>;
