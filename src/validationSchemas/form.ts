import { z } from "zod";
import { emailSchema } from "./email";

// Username validation schema
export const usernameSchema = z
  .string()
  .min(5, { message: "Username must be at least 5 characters." })
  .max(30, { message: "Username must be at most 30 characters." });

// Age validation schema
export const ageSchema = z
  .number()
  .min(18, { message: "You must be over 18 years old." });

// Combined user schema
export const userSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  age: ageSchema,
});

// Type for the user form
export type UserFormType = z.infer<typeof userSchema>;
