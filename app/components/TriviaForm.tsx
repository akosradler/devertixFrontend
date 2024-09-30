import { useState } from "react";
import { Question } from "~/model/question";

import { FormikProps, FormikValues, useFormikContext } from "formik";
import { TriviaTrueFalse } from "./TriviaTrueFalse";
import TriviaProgress from "./TriviaProgress";

export const TriviaForm = ({ form, questions }: { form: FormikProps<FormikValues>; questions: Array<Question> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const formikContext = useFormikContext();

  const progressForm = async (step: number) => {
    if (currentIndex === questions.length - 1) {
      await formikContext.submitForm();
    } else {
      setCurrentIndex(oldIndex => oldIndex + step);
    }
  };

  const renderStep = (form: FormikProps<FormikValues>) => {
    return <TriviaTrueFalse form={form} question={questions[currentIndex]} progressForm={progressForm} />;
  };

  return (
    <>
      <TriviaProgress numberOfQuestions={questions.length} currentIndex={currentIndex} />
      {renderStep(form)}
    </>
  );
};
