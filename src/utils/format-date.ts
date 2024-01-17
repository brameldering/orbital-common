// Return a string in format dd-mm-yyyy for a Date parameter
export const formatDate = (date: Date): string => {
  if (!(date instanceof Date)) {
    throw new Error('Invalid date');
  }

  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
