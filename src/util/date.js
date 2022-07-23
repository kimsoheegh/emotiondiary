export const getStringDate = (date) => {
  return date.toISOString().slice(1, 10);
};
