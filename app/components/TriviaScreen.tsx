import { useState } from "react";
import { Question } from "~/model/question";

import { TriviaForm } from "./TriviaForm";
import { Formik } from "formik";
import { TriviaResults } from "./TriviaResults";

export const TriviaScreen = ({ questions }: { questions: Array<Question> }) => {
  const [showResults, setShowResults] = useState(false);

  // @ts-ignore
  const [initialValues] = useState(questions.reduce((acc, curr) => ((acc[curr.id] = null), acc), {}));

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={() => setShowResults(true)}>
        {form =>
          showResults ? (
            <TriviaResults questions={questions} setShowResults={setShowResults} />
          ) : (
            <TriviaForm form={form} questions={questions} />
          )
        }
      </Formik>
    </>
  );
};
