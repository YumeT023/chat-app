import {object, string} from "yup";

export const createSchemas = object({
  channelName: string().required(),
  type: string().equals(["public", "private"]),
});
