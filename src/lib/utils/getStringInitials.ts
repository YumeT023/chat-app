/**
 * Returns the initials of a given full name.
 *
 * @param {string} str - The full str to extract initials from.
 * @returns {string} The concatenated initials of the first and last.
 * @example: "John De" -> "JD"
 */
export const getStringInitials = (str: string) => {
  if (!str) return "";
  const [s1, s2 = ""] = str.split(" ");
  return [s1[0], s2[0] ?? ""].join("").toUpperCase();
};
