export const getSize = (
  extraSmall: boolean,
  small: boolean,
  medium: boolean,
  large: boolean
) => {
  if (large) {
    return 300;
  }
  if (medium) {
    return 225;
  }
  if (small) {
    return 200;
  }
  if (extraSmall) {
    return 200;
  }
};
