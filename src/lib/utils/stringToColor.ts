/**
 * Generates a color string from a given input string.
 * The generated color string is in the format "#RRGGBB" where R, G, and B are hexadecimal values.
 *
 * @param {string} input The input string.
 * @return {string} The generated color string.
 */
export const stringToColor = (input: string) => {
  let hash = 0;
  let i;

  for (i = 0; i < input.length; i += 1) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};
