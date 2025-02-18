export const getSuffixDay = (date: Date) => {
  const day = date.getDay();
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }};
