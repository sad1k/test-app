import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { CountryData } from "../../api/types";
import { useNavigate } from "react-router-dom";
import { Image } from "../Image/Image";

export const Country = ({ name, flags, capital }: CountryData) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("123");
    navigate(`/country/${name.common}`);
  };

  return (
    <Grid item xs={4}>
      <Card sx={{ cursor: "pointer", margin: "2px" }}>
        <CardActionArea onClick={handleClick}>
          <Image title={flags.alt} url={flags.png} />
          <CardContent>
            <Typography gutterBottom variant="h3">
              {name.common}
            </Typography>
            <Typography variant="h5">{capital}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
