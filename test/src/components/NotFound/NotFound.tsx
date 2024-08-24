import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      rowGap={10}
    >
      <Typography textAlign={"center"} variant="h1">
        404 - Page not found
      </Typography>

      <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
    </Box>
  );
};
