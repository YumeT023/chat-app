export const formatError = (err: any) => {
  return err.response?.data?.message ?? err;
};
