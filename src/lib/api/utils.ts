import {Nullable, Select} from "@/src/types/utility";

/**
 * exclude useless `status` beside on the real data
 * @param data the record in which to pick the data from
 * @param selector if the record key to pick is known ahead of time
 */
export const reshapeData = <T extends {status: boolean}, key extends keyof T>(
  data: T,
  selector: keyof T
): Nullable<Select<T, typeof selector>> => {
  if (selector) return data[selector];
  for (const key in data) {
    if (key !== "status") {
      return data[key];
    }
  }
  return null;
};

export const addAuth = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
