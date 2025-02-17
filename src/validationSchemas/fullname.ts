import { z } from "zod";

export const fullnameSchema = z
  .string()
  .min(5, { message: "Name must be at least 5 characters." })
  .max(30, { message: "Name must be at most 30 characters." });