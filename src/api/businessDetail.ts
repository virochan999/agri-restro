import { api } from "../lib/axios";
import { businessDetailSchemaType } from "../validationSchemas/businessDetail";

export const businessDetailApi ={
  updateBusinessDetails: async (details:businessDetailSchemaType)=>{ 
    const {data} = await api.put(`/agri-restaurant/address`,details)
    return data;
  },
  getBusinessDetails: async (userId:string)=>{ 
    const {data} = await api.get(`/agri-restaurant/address/${userId}`)
    return data;
  },
}