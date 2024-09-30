import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { Question } from "~/model/question";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useFormikContext } from "formik";

export const TriviaResults = ({
  questions,
  setShowResults,
}: {
  questions: Array<Question>;
  setShowResults: (showResults: boolean) => void;
}) => {
  const { values: userAnswers, resetForm } = useFormikContext<Record<string, boolean | null>>();
  const [userScore] = useState(
    questions.reduce((acc, curr) => {
      return acc + Number(userAnswers[curr.id] === curr.answer);
    }, 0),
  );

  const handleResetForm = () => {
    resetForm(), setShowResults(false);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={6}>
      <Box mb={6} display={"flex"} flexDirection="column" alignItems="center">
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          You Scored
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>{`${userScore} / ${questions.length}`}</Typography>
      </Box>
      <List sx={{ mb: 6 }}>
        {questions.map(question => (
          <ListItem key={question.id}>
            <ListItemIcon>{userAnswers[question.id] === question.answer ? <FaPlus /> : <FaMinus />}</ListItemIcon>
            <ListItemText primary={<Typography variant="h5">{question.question}</Typography>} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="outlined"
        onClick={() => {
          handleResetForm();
        }}
      >
        PLAY AGAIN?
      </Button>
    </Box>
  );
};
