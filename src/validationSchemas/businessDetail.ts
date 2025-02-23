import { z } from "zod";
import {panNumber} from "./pan";
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
})
export const businessDetailSchema = z.object({
    restaurantName: z.string().optional(),
    fssaiId: fsssaiNumber,
    panCard: panNumber,
    contactType: z.string().nonempty(),
    userId: z.string().nonempty(),
    address: addressSchema,
    phone: z.string().optional(),
    whatsapp: z.string().optional(),
    email: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
});

export type businessDetailSchemaType = z.infer<typeof businessDetailSchema>;