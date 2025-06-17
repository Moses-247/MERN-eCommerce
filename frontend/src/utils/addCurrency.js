// Convert the number to a formatted string
export const addCurrency = num => {
  return `Ksh${num?.toLocaleString('en-US')}`;
};
