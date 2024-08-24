import { Country } from "../Country/Country";
import { CountryData } from "../../api/types";
import GridContainer from "../GridContainer/GridContainer";

export interface CountryListProps {
  countries: CountryData[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <GridContainer>
      {countries.map((country) => (
        <Country
          key={country.name.official}
          name={country.name}
          capital={country.capital}
          flags={country.flags}
        />
      ))}
    </GridContainer>
  );
};
