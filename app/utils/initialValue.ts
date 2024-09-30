import { Question } from "~/model/question";

export const calculateInitialValues = (questions: Array<Question>) =>
  // @ts-ignore
  questions.reduce((acc, curr) => ((acc[curr.id] = null), acc), {});
