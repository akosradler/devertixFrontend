import { v4 } from "uuid";
import { Question } from "~/model/question";
import { calculateInitialValues } from "~/utils/initialValue";
import { describe, it, expect } from "vitest";

describe("InitialValue utils tests", () => {
  it("should create an object map out of a question array", () => {
    const q1Id = v4();
    const q2Id = v4();
    const questions: Array<Question> = [
      { answer: true, id: q1Id, question: "The answer is true" },
      { answer: false, id: q2Id, question: "The answer is false" },
    ];

    const initialValues = calculateInitialValues(questions);

    expect(Object.keys(initialValues)).toHaveLength(2);
    expect(Object.keys(initialValues)).toContain(q1Id);
    expect(Object.keys(initialValues)).toContain(q2Id);
  });
});
