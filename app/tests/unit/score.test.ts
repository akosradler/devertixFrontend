import { v4 } from "uuid";
import { Question } from "~/model/question";
import { UserAnswers } from "~/model/userAnswers";
import { calculateInitialValues } from "~/utils/initialValue";
import { calculateUserScore } from "~/utils/score";

describe("Score utils tests", () => {
  it("should calculate the proper user score when all answers are correct", () => {
    const q1Id = v4();
    const q2Id = v4();
    const q3Id = v4();
    const questions: Array<Question> = [
      { answer: true, id: q1Id, question: "The answer is true" },
      { answer: true, id: q2Id, question: "The answer is true" },
      { answer: false, id: q3Id, question: "The answer is false" },
    ];

    const userAnswers: UserAnswers = {
      [q1Id]: true,
      [q2Id]: true,
      [q3Id]: false,
    };

    const userScore = calculateUserScore(questions, userAnswers);

    expect(userScore).toBe(3);
  });

  it("should calculate the proper user score when all answers are incorrect", () => {
    const q1Id = v4();
    const q2Id = v4();
    const q3Id = v4();
    const questions: Array<Question> = [
      { answer: true, id: q1Id, question: "The answer is true" },
      { answer: true, id: q2Id, question: "The answer is true" },
      { answer: false, id: q3Id, question: "The answer is false" },
    ];

    const userAnswers: UserAnswers = {
      [q1Id]: false,
      [q2Id]: false,
      [q3Id]: true,
    };

    const userScore = calculateUserScore(questions, userAnswers);

    expect(userScore).toBe(0);
  });

  it("should calculate the proper user score when answers are mixed", () => {
    const q1Id = v4();
    const q2Id = v4();
    const q3Id = v4();
    const questions: Array<Question> = [
      { answer: true, id: q1Id, question: "The answer is true" },
      { answer: true, id: q2Id, question: "The answer is true" },
      { answer: false, id: q3Id, question: "The answer is false" },
    ];

    const userAnswers: UserAnswers = {
      [q1Id]: true,
      [q2Id]: true,
      [q3Id]: true,
    };

    const userScore = calculateUserScore(questions, userAnswers);

    expect(userScore).toBe(2);
  });
});
