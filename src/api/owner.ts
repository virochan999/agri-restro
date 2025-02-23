import { api } from "../lib/axios";
import { ownerSchemaType } from "../validationSchemas/owner";

export const ownerApi = {
  updateOwnerDetails: async (details:ownerSchemaType,userId:string)=>{
    const {data} = await api.put(`/agri-restaurant/profile/${userId}`,details)
    return data;
  },
  getOwnerDetails: async (userId:string)=>{
    const {data} = await api.get(`/agri-restaurant/address/${userId}`)
    return data;
  } 
}