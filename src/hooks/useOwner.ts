import { useMutation, useQuery } from "@tanstack/react-query";
import { ownerApi } from "../api/owner";
import { ownerSchemaType } from "../validationSchemas/owner";
import { useRouter } from "expo-router";
import { useAuthStore } from "../store/useAuthStore";

export const useOwner =()=>{
  const router = useRouter();
  const {setAuth} = useAuthStore();
  const updateMutation = useMutation({
     mutationFn: ({details,userId}:{details:ownerSchemaType,userId:string})=> ownerApi.updateOwnerDetails(details,userId),
     onSuccess: (data)=>{
      router.push("/(app)/businessDetails");
     },
     onError: (error)=>{
      console.log('-----error----',error)
     }
  })

  return {
    updateOwner: updateMutation.mutate,
    isLoading: updateMutation.isPending,
    error: updateMutation.error
  }
}

export const getOwnerDetails = async (userId:string)=>{
  const  ownerQuery = useQuery({
    queryKey: ["owner",userId],
    queryFn: () => ownerApi.getOwnerDetails(userId),
  })
  console.log('---ownerQuery----',ownerQuery.data)
  return {
    ownerData: ownerQuery.data,
    isLoading: ownerQuery.isLoading,
    error: ownerQuery.error,
  }
}
