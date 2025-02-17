import { z } from "zod";
import { emailSchema } from "./email";
import { fullnameSchema } from "./fullname";
import { usernameSchema } from "./username";
import { roles } from "../enums/role";
import { modules } from "../enums/modules";

export const signupSchema = z.object({
  username: usernameSchema,
  fullName: fullnameSchema,
  email: emailSchema,
  // phone: z.string().min(10, "Phone number must be at least 10 digits"),
  role: z.enum(roles), 
  activeModule: z.enum(modules)
});

export const changePasswordSchema = z.object({
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 
      "Password must contain uppercase, lowercase, number and special character"),
  confirmPassword: z.string(),
  // userId: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export type SignUpFormType = z.infer<typeof signupSchema>;
export type PasswordFormType = z.infer<typeof changePasswordSchema>;
