import React, { useEffect } from "react";
import ProfileWrapper from "@/src/components/organisms/PageThemeWrapper/Profile/ProfileWrapper";
import { View, Text } from "react-native";
import TextInput from "@/src/components/atoms/TextInput/TextInput";
import Dropdown from "@/src/components/Dropdown";
import Button from "@/src/components/atoms/Button/Button";
import styles from "./OwnerStyle";
import { useForm, Controller } from "react-hook-form";
import { ownerSchema, ownerSchemaType } from "@/src/validationSchemas/owner";
import { zodResolver } from "@hookform/resolvers/zod";
import {useAuthStore} from "@/src/store/useAuthStore"
import { useOwner, getOwnerDetails } from "@/src/hooks/useOwner";
function index() {
  const {user} = useAuthStore()
  const {
    control,
    handleSubmit,
    formState: { touchedFields, errors },
  } = useForm<ownerSchemaType>( {
    resolver: zodResolver(ownerSchema),
      mode: "onBlur",
      defaultValues: {
        fullName: user?.contactInfo?.fullName,
        email: user?.contactInfo?.email,
        phone: user?.contactInfo?.phone,
        contactType: user?.contactInfo?.contactType
      }
      });
      const {updateOwner} = useOwner()
      // const {ownerData}:any = getOwnerDetails(user.id)
      const handleOwnerSubmit = (values: ownerSchemaType) => {
        const payload = {
          fullName: values?.fullName,
          email: values?.email,
          phone: values?.phone,
          contactType: values?.contactType,
        }
        // payload.details.userId = user.id
        updateOwner({details:payload,userId:user.id})
      };
  return (
    <ProfileWrapper>
      <View style={styles.container}>
        <Text style={styles.heading}>Owner Details</Text>
        <View>
        <Controller  
          name="fullName"
          control={control}
          render={({field:{onBlur,onChange,value}})=>(
            <TextInput
            labelStyles={[styles.label]}
            label="Owner's Full Name"
            value={value}
            onChangeText={onChange}
            placeholder="Enter your name"
            error={errors?.fullName?.message}
            id="fullName"
            touched={touchedFields.fullName}
            onBlur={onBlur}
          />
          )}
        />
        <Controller  
          name="phone"
          control={control}
          render={({field:{onBlur,onChange,value}})=>(
            <TextInput
            labelStyles={[styles.label]}
            label="Mobile Number"
            value={value}
            onChangeText={(phone)=>{
              const numericText = phone.replace(/[^0-9]/g, '');
              if (numericText.length <= 10) {
                onChange(numericText);
              }
            }}
            placeholder="Enter mobile number"
            error={errors?.phone?.message}
            id="phone"
            maxLength={10}
            touched={touchedFields.phone}
            onBlur={onBlur}
          />
          )}
        />
        <Controller  
          name="email"
          control={control}
          render={({field:{onBlur,onChange,value}})=>(
            <TextInput
            labelStyles={[styles.label]}
            label="Business Email"
            value={value}
            onChangeText={onChange}
            placeholder="Enter Business Email"
            error={errors?.email?.message}
            id="email"
            touched={touchedFields.email}
            onBlur={onBlur}
          />
          )}
        />

        <Controller  
          name="contactType"
          control={control}
          render={({field:{onChange,value}})=>(
            <>
            <Dropdown
            label="Business Type"
            slectedLabel="name"
            slectedValueLabel="code"
            placeholder="Enter Business Email"
            options={[
              { name: "Number", code: "CALL" },
              { name: "WhatsApp", code: "WHATSAPP" },
              { name: "Email", code: "EMAIL" },
            ]}
            selectedValue={value}
            onSelect={(item)=>onChange(item.code)}
          ></Dropdown>
            
            </>
          )}
        />
          
           <Button
          text="Continue"
          btnStyle={[styles.button]}
          onPress={handleSubmit(handleOwnerSubmit)}
          >
        </Button>
        </View>
      </View>
    </ProfileWrapper>
  );
}

export default index;
