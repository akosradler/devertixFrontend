import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "@remix-run/react";

export const TriviaWelcome = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
      <Box mb={12} textAlign="center">
        <Typography variant="h3">Welcome to the Trivia Challenge!</Typography>
      </Box>
      <Box mb={12} textAlign="center">
        <Typography variant="h5">You will be presented with 10 True or False questions.</Typography>
      </Box>
      <Box mb={12} textAlign="center">
        <Typography variant="h5">Can you score 100%?</Typography>
      </Box>
      <Button onClick={() => navigate("/trivia")}>BEGIN</Button>
    </Box>
  );
};
