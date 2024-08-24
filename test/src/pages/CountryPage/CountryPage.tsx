import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CountryDetails } from "./types";
import { Text } from "components/Text/Text";
import { getText } from "utils/getText";
import { Image } from "components/Image/Image";

export const CountryPage = ([
  { name, capital, continents, flags, population, region, subregion },
]: CountryDetails[]) => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          boxShadow: "0px 0px 19px -5px rgba(0,0,0,0.75)",
          padding: 0,
          margin: "0 10px",
          borderRadius: "10px",
        }}
      >
        {name ? (
          <Grid
            padding={5}
            container
            spacing={4}
            columns={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid textAlign={"left"} item xs={1} sm={1} md={1}>
              <Text
                strong
                text={getText(name.common, name.common)}
                gutterBottom
                variant="h3"
              />
              <Text
                text={getText(capital, `Capital: ${capital}`)}
                gutterBottom
                variant="h4"
              />
              <Text
                text={getText(
                  continents.toString(),
                  `Continents: ${continents}`
                )}
                gutterBottom
                variant="h4"
              />
              <Text
                text={getText(population, `Population: ${population} человек`)}
                gutterBottom
                variant="h4"
              />
              <Text
                text={getText(region, `Region: ${region}`)}
                gutterBottom
                variant="h4"
              />
              <Text
                text={getText(subregion, `Subregion: ${subregion}`)}
                gutterBottom
                variant="h4"
              />
            </Grid>
            <Grid item xs={1} sm={1} md={1}>
              <Image url={flags.png} title={flags.alt} />
            </Grid>
            <Grid item xs={1} sm={2} md={2}>
              <Button onClick={() => navigate("/")}>Back to Home</Button>
            </Grid>
          </Grid>
        ) : (
          <>
            <Typography variant="h1">No such country!</Typography>
            <Button onClick={() => navigate("/")}>Back to Home</Button>
          </>
        )}
      </Box>
    </>
  );
};
