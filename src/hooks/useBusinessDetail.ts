import { useMutation, useQuery } from "@tanstack/react-query";
import { businessDetailApi } from "../api/businessDetail";
import { businessDetailSchemaType } from "../validationSchemas/businessDetail";
import { useRouter } from "expo-router";

export const useBusinessDetail = () => {
  const router = useRouter();
 const updateBusinessMutation= useMutation({
    mutationFn: (details:businessDetailSchemaType)=> businessDetailApi.updateBusinessDetails(details),
    onSuccess: (data)=>{
      router.push("/(app)/profileDone");
    },
    onError: (error)=>{
      console.log('-----error----',error)
    }
  })
 
  return {
    updateBusinessDetail: updateBusinessMutation.mutate,
  }
};

export const getBusinessDetails =(userId:string)=>{
 const businessDetailQuery = useQuery({
    queryKey: ['businessDetails',userId],
    queryFn:()=>businessDetailApi.getBusinessDetails(userId)
  })
  return {
    ownerData: businessDetailQuery.data,
    isLoading: businessDetailQuery.isLoading,
    error: businessDetailQuery.error,
  }
} 
