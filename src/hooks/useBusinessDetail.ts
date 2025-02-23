import { useMutation } from "@tanstack/react-query";
import { businessDetailApi } from "../api/businessDetail";
import { businessDetailSchemaType } from "../validationSchemas/businessDetail";

export const useBusinessDetail = () => {
 const updateBusinessMutation= useMutation({
    mutationFn: (details:businessDetailSchemaType)=> businessDetailApi.updateBusinessDetails(details),
    onSuccess: (data)=>{
      console.log('-----------data',data)
    },
    onError: (error)=>{
      console.log('-----error----',error)
    }
  })
  return {
    updateBusinessDetail: updateBusinessMutation.mutate,
  }
};