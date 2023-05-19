import {object, string} from "yup";

export const createSchemas = object({
  name: string().required(),
  type: string().equals(["public", "private"]),
});
