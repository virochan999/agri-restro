import {z} from "zod";
import { fullnameSchema } from "./fullname";
import { phoneSchema } from "./phone";
import { emailSchema } from "./email";
export const ownerSchema = z.object({
  fullName: fullnameSchema,
  email: emailSchema,
  phone: phoneSchema,
  contactType: z.string().nonempty(),
});

export type ownerSchemaType = z.infer<typeof ownerSchema>