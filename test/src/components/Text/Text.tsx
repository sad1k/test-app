import { Typography, TypographyProps } from "@mui/material";

interface IText extends TypographyProps {
  strong?: boolean | undefined;
  text: string | undefined;
}

export const Text = ({ strong, text, ...props }: IText) => {
  return (
    <>
      {text ? (
        <Typography {...props}>
          {strong ? <strong>{text}</strong> : text}
        </Typography>
      ) : (
        false
      )}
    </>
  );
};
