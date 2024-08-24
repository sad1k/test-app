import { Box, Button, Typography } from "@mui/material";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const error = useRouteError();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      rowGap={10}
    >
      <Typography textAlign={"center"} variant="h1">
        Ooops!
      </Typography>

      <Typography textAlign={"center"} variant="h2">
        Something went wrong
      </Typography>
      {error instanceof Error ? (
        <ErrorMessage message={error.message} stack={error.stack} />
      ) : isRouteErrorResponse(error) ? (
        <ErrorMessage message={error.data as string} />
      ) : (
        ""
      )}

      <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
    </Box>
  );
};
