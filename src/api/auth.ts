import { api } from "@/src/lib/axios";
import { UserFormType } from "@/src/validationSchemas/loginForm";
import { SignUpFormType } from "../validationSchemas/signupForm";

export const authApi = {
  login: async (credentials: UserFormType) => {
    const payload = {
      username: credentials.email,
      password: credentials.password,
      moduleType: "AGRI_APIS",
    };
    const { data } = await api.post("/auth/login", payload);
    console.log("data", data)
    return data;
  },

  logout: async () => {
    const { data } = await api.post("/auth/logout");
    return data;
  },

  signup: async (userData: SignUpFormType) => {
    const response = await api.post('/api/signup', userData);
    return response.data;
  },
};
