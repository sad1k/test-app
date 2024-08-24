import {
  Box,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { getSize } from "utils/getSize";

export const SkeletonCountryPage = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.up("sm"));
  const large = useMediaQuery(theme.breakpoints.up("md"));

  const size = getSize(false, small, medium, large);

  return (
    <Box
      sx={{
        boxShadow: "0px 0px 19px -5px rgba(0,0,0,0.75)",
        padding: 0,
        margin: "0 10px",
        borderRadius: "10px",
        width: "80vw",
      }}
    >
      <Grid
        padding={5}
        container
        spacing={10}
        columns={{ xs: 1, sm: 2, md: 2 }}
      >
        <Grid item xs={1} sm={1} md={1}>
          <Typography gutterBottom variant="h3">
            <Skeleton />
          </Typography>
          <Typography gutterBottom variant="h4">
            <Skeleton />
          </Typography>
          <Typography gutterBottom variant="h4">
            <Skeleton />
          </Typography>
          <Typography gutterBottom variant="h4">
            <Skeleton />
          </Typography>
          <Typography gutterBottom variant="h4">
            <Skeleton />
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <Box>
            <Skeleton width={size} height={size} variant="rounded" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
