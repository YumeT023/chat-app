export const withErrorFilter = async <T extends unknown>(callbackfn: () => Promise<T>) => {
  try {
    return await callbackfn();
  } catch (e: any) {
    throw e.response.data.message ?? e;
  }
};
