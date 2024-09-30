import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { Question } from "~/model/question";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useFormikContext } from "formik";
import { useNavigate } from "@remix-run/react";
import { calculateUserScore } from "~/utils/score";
import { UserAnswers } from "~/model/userAnswers";

export const TriviaResults = ({ questions }: { questions: Array<Question> }) => {
  const navigate = useNavigate();
  const { values: userAnswers } = useFormikContext<UserAnswers>();
  const [userScore] = useState(calculateUserScore(questions, userAnswers));

  const handleResetForm = () => {
    navigate("/");
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
      <Button variant="outlined" onClick={handleResetForm}>
        PLAY AGAIN?
      </Button>
    </Box>
  );
};
