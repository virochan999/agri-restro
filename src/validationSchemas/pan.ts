import { z } from "zod";

export const panNumber = z
    .string()
    .trim()
    .length(10, "PAN number must be exactly 10 characters")
    .regex(
      /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      "Invalid PAN format. Format should be ABCDE1234F"
    )
    .transform(val => val.toUpperCase())