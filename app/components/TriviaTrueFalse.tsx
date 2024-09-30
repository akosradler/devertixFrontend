import { Box, Button, Typography } from "@mui/material";
import { FormikProps, FormikValues } from "formik";
import { Question } from "~/model/question";

export const TriviaTrueFalse = ({
  form,
  question,
  progressForm,
}: {
  form: FormikProps<FormikValues>;
  question: Question;
  progressForm: (step: number) => void;
}) => {
  const handleClick = async (value: boolean) => {
    await form.setFieldValue(question.id, value);
    progressForm(1);
  };

  return (
    <>
      <Box
        sx={{
          border: 1,
          mb: 12,
          width: "300px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">{question.question}</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} width={"300px"}>
        <Button variant="outlined" onClick={() => handleClick(false)}>
          FALSE
        </Button>
        <Button variant="outlined" onClick={() => handleClick(true)}>
          TRUE
        </Button>
      </Box>
    </>
  );
};
