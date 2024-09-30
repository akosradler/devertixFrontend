import { Box, Typography } from "@mui/material";

type TriviaProgressProps = {
  numberOfQuestions: number;
  currentIndex: number;
};

const TriviaProgress = ({ numberOfQuestions, currentIndex }: TriviaProgressProps) => {
  return (
    <Box my={6} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Question
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {currentIndex + 1} / {numberOfQuestions}
      </Typography>
    </Box>
  );
};

export default TriviaProgress;
