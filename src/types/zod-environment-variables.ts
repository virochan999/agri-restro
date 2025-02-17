import { z } from "zod";

const envVariables = z.object({
  EXPO_PUBLIC_APP_BASE_URL: z.string(),
  EXPO_PUBLIC_APP_MODULE_TYPE: z.enum(["AGRI_RESTAURANT"]),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv
      extends z.infer<typeof envVariables> {}
  }
}