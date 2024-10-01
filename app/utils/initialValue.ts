import { Question } from "~/model/question";

export const calculateInitialValues = (questions: Array<Question>) =>
  // @ts-expect-error - type 'string' can't be used to index type '{}' - well, yes, it can, TS just doesn't know inherently because by default it's an emptyt object
  questions.reduce((acc, curr) => ((acc[curr.id] = null), acc), {});
