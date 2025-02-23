import { z } from "zod";

export const phoneSchema = z.string()
.min(10, "Phone number must be 10 digits")
.max(10, "Phone number must be 10 digits")