import { z } from "zod";
import { emailSchema } from "./email";
import { passwordSchema } from "./password";
import { usernameSchema } from "./username";

// Combined new user schema
export const signupSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

// Type for the user form
export type SignUpFormType = z.infer<typeof signupSchema>;
