import { useMediaQuery, useTheme } from "@mui/material";

export const useColumns = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("md"));
  const extraSmall = useMediaQuery(theme.breakpoints.down("sm"));
  if (extraSmall) {
    return 1;
  }
  if (small) {
    return 2;
  }

  return 3;
};
