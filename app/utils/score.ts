import { Question } from "~/model/question";
import { UserAnswers } from "~/model/userAnswers";

export const calculateUserScore = (questions: Array<Question>, userAnswers: UserAnswers) =>
  questions.reduce((acc, curr) => {
    return acc + Number(userAnswers[curr.id] === curr.answer);
  }, 0);
