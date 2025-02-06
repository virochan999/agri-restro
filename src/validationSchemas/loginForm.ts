import { z } from "zod";
import { emailSchema } from "./email";
import { passwordSchema } from "./password";

// Combined user schema
export const userSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

// Type for the user form
export type UserFormType = z.infer<typeof userSchema>;
