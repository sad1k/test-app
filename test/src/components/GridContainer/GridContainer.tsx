import { Grid } from "@mui/material";
import { PropsWithChildren } from "react";

const GridContainer = ({ children }: PropsWithChildren) => {
  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
      {children}
    </Grid>
  );
};

export default GridContainer;
