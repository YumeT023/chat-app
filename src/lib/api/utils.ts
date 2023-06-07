export const addAuth = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
