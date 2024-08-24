import { Country } from "../Country/Country";
import { CountryData } from "../../api/types";
import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import { useSize } from "hooks/useSize";
import { useColumns } from "hooks/useColumns";

export interface CountryListProps {
  countries: CountryData[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  const columns = useColumns();
  const windowSize = useSize();
  console.log(columns);
  return (
    <Grid
      columnCount={columns}
      columnWidth={400}
      height={windowSize[0]}
      rowCount={Math.ceil(countries.length / columns)}
      rowHeight={320}
      width={windowSize[1]}
      itemData={countries}
    >
      {Cell}
    </Grid>
  );
};

const Cell = ({
  data,
  columnIndex,
  rowIndex,
  style,
}: GridChildComponentProps<CountryData[]>) => {
  const country = data[rowIndex * 3 + columnIndex];
  return (
    <div style={style}>
      {
        <Country
          key={country.name.official}
          name={country.name}
          capital={country.capital}
          flags={country.flags}
        />
      }
    </div>
  );
};
