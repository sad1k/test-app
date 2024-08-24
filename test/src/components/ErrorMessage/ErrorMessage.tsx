import { Typography } from "@mui/material";

interface ErrorMessageProps {
  message: string;
  stack?: string;
}

export const ErrorMessage = ({ message, stack }: ErrorMessageProps) => {
  console.log(message, stack);
  return (
    <>
      <Typography variant="h5">{message}</Typography>
      {stack ? <Typography variant="h5">Stack: {stack}</Typography> : ""}
    </>
  );
};
