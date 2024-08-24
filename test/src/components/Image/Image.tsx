import { CardMedia } from "@mui/material";

interface IImage {
  url: string;
  title: string;
  isFit?: boolean | undefined;
}

export const Image = ({ url, title, isFit }: IImage) => {
  if (isFit) {
    return (
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        image={url}
        title={title}
      />
    );
  }
  return <CardMedia height={100} component="img" image={url} title={title} />;
};
