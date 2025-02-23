import { z } from "zod";
import { panNumber } from "./pan";
import { fsssaiNumber } from "./fssai";

const addressSchema = z.object({
    addressLine1: z
        .string()
        .min(2, "Business address is required")
        .max(30, "Address must be at most 30 characters"),
    addressLine2: z
        .string()
        .min(2, "Address is required")
        .max(30, "Address must be at most 30 characters"),
    country: z.string().optional(),
    countryCode: z.string().optional(),
    state: z.string().optional(),
    stateCode: z.string().optional(),
    city: z.string().optional(),
    pinCode: z.string().optional(),
    lat: z.string().optional(),
    lng: z.string().optional(),
    defaultAddress: z.boolean().optional(),
});

export const businessDetailSchema = z.object({
    restaurantName: z.string().optional(),
    fssaiId: fsssaiNumber,
    panCard: panNumber,
    contactType: z.enum(["CALL", "WHATSAPP", "EMAIL"]),
    userId: z.string().nonempty(),
    address: addressSchema,
    phone: z.string().optional(),
    whatsapp: z.string().optional(),
    email: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
}).superRefine((data, ctx) => {
    // Validate contact fields based on contactType
    switch (data.contactType) {
        case "CALL":
            if (!data.phone) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Phone number is required",
                    path: ["phone"]
                });
            }
            break;
        case "WHATSAPP":
            if (!data.whatsapp) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "WhatsApp number is required",
                    path: ["whatsapp"]
                });
            }
            break;
        case "EMAIL":
            if (!data.email) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Email is required",
                    path: ["email"]
                });
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Invalid email format",
                    path: ["email"]
                });
            }
            break;
    }
});

export type businessDetailSchemaType = z.infer<typeof businessDetailSchema>;