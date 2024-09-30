import { useState } from "react";
import { Question } from "~/model/question";

import { TriviaForm } from "./TriviaForm";
import { Formik } from "formik";
import { TriviaResults } from "./TriviaResults";
import { calculateInitialValues } from "~/utils/initialValue";

export const TriviaScreen = ({ questions }: { questions: Array<Question> }) => {
  const [showResults, setShowResults] = useState(false);

  const [initialValues] = useState(calculateInitialValues(questions));

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={() => setShowResults(true)}>
        {form =>
          showResults ? <TriviaResults questions={questions} /> : <TriviaForm form={form} questions={questions} />
        }
      </Formik>
    </>
  );
};
