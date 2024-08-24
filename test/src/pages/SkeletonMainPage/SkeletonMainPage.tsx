import { Box, Grid, Skeleton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import GridContainer from "components/GridContainer/GridContainer";
import { getSize } from "utils/getSize";

export const SkeletonMainPage = () => {
  const skeletons = Array.from({ length: 10 }, () => Math.random());

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.up("sm"));
  const large = useMediaQuery(theme.breakpoints.up("md"));

  const size = getSize(false, small, medium, large);

  return (
    <Box>
      <GridContainer>
        {skeletons.map((val) => (
          <Grid key={val} item xs={4} sm={3} md={4} lg={3}>
            <Skeleton width={size} height={size} variant="rounded" />
          </Grid>
        ))}
      </GridContainer>
    </Box>
  );
};
