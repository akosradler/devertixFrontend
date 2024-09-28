import { Box, Button, Typography } from "@mui/material";

export const TriviaWelcome = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb={12} textAlign="center">
        <Typography variant="h3">Welcome to the Trivia Challenge!</Typography>
      </Box>
      <Box mb={12} textAlign="center">
        <Typography variant="h5">You will be presented with 10 True or False questions.</Typography>
      </Box>
      <Box mb={12} textAlign="center">
        <Typography variant="h5">Can you score 100%?</Typography>
      </Box>
      <Button>BEGIN</Button>
    </Box>
  );
};
