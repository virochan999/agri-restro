import { z } from "zod";

// Username validation schema
export const usernameSchema = z
  .string()
  .min(5, { message: "Username must be at least 5 characters." })
  .max(30, { message: "Username must be at most 30 characters." });
