import {z} from "zod";

export const fsssaiNumber = z.string()
.trim()
.refine((value) => {
  // Basic License (14 digits starting with 1)
  const basicLicensePattern = /^1[0-9]{13}$/;
  
  // State License (14 digits starting with 2)
  const stateLicensePattern = /^2[0-9]{13}$/;
  
  // Central License (14 digits starting with 3)
  const centralLicensePattern = /^3[0-9]{13}$/;
  
  return (
    basicLicensePattern.test(value) ||
    stateLicensePattern.test(value) ||
    centralLicensePattern.test(value)
  );
}, "Invalid FSSAI number. Must be 14 digits and start with 1, 2, or 3")
.transform((val) => val.trim())