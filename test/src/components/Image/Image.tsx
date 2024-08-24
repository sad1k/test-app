import { CardMedia } from "@mui/material";

interface IImage {
  url: string;
  title: string;
}

export const Image = ({ url, title }: IImage) => {
  return (
    <CardMedia
      component="img"
      sx={{ objectFit: "contain" }}
      image={url}
      title={title}
    />
  );
};
