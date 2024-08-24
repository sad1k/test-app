import { Typography } from "@mui/material";
import { CountryData } from "api/types";
import { CountryList } from "components/CountryList/CountryList";

export const MainPage = (countries: CountryData[]) => {
  return (
    <>
      {countries.length > 0 ? (
        <CountryList countries={countries} />
      ) : (
        <Typography variant="h1">Countries not found!</Typography>
      )}
    </>
  );
};
