export const getText = (
  field: number | string | undefined,
  text: string
): string | undefined => {
  if (field) {
    return text;
  }
};
