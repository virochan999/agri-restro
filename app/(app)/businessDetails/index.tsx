import React from "react";
import ProfileWrapper from "@/src/components/organisms/PageThemeWrapper/Profile/ProfileWrapper";
import { View, Text, ScrollView } from "react-native";
import { Input } from "@/src/components/Input/Input";
import Dropdown from "@/src/components/Dropdown";
import Button from "@/src/components/atoms/Button/Button";
import styles from "./businessStyle";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useForm, Controller } from "react-hook-form";
import TextInput from "@/src/components/atoms/TextInput/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  businessDetailSchema,
  businessDetailSchemaType,
} from "@/src/validationSchemas/businessDetail";
import CustomDatePicker from "@/src/components/datePicker";
import CustomTimePicker from "@/src/components/timePicker";
import { useBusinessDetail } from "@/src/hooks/useBusinessDetail";

function index() {
  const { user } = useAuthStore();
  const { updateBusinessDetail } = useBusinessDetail();
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<businessDetailSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(businessDetailSchema),
    defaultValues: {
      userId: user.id,
      restaurantName: user?.contactInfo?.fullName,
      address: {
        addressLine1: user?.contactInfo?.email,
        addressLine2: user?.contactInfo?.phone,
      },
      fssaiId: user?.contactInfo?.contactType,
    },
  });
  const onSubmit = (values: businessDetailSchemaType) => {
    const payload = {
      userId: user.id,
      address: {
        addressLine1: values?.address?.addressLine1,
        addressLine2: values?.address?.addressLine2,
        country: "",
        countryCode: "",
        state: "",
        stateCode: "",
        city: "",
        pinCode: "",
        lat: "",
        lng: "",
        defaultAddress: true,
      },
      contactType: values?.contactType,
      phone: "",
      whatsapp: "",
      email: "",
      startTime: "09:00",
      endTime: "18:00",
      fssaiId: values?.fssaiId,
      panCard: values?.panCard,
    };
    updateBusinessDetail(payload);
  };
  return (
    <ProfileWrapper>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Business Information</Text>
          <View>
            <Controller
              name="restaurantName"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  labelStyles={[styles.label]}
                  label="Restaurant Name"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter your Restaurant name"
                  error={errors?.restaurantName?.message}
                  id="restaurantName"
                  touched={touchedFields.restaurantName}
                  onBlur={onBlur}
                />
              )}
            />
            <Controller
              name="contactType"
              control={control}
              render={({ field: { onChange, value } }) => (
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
                  onSelect={(item) => onChange(item.code)}
                ></Dropdown>
              )}
            />
            <Controller
              name="fssaiId"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  labelStyles={[styles.label]}
                  label="FSSAI License Number (Optional)"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter License Number"
                  error={errors?.fssaiId?.message}
                  id="fssaiId"
                  maxLength={14}
                  touched={touchedFields.fssaiId}
                  onBlur={onBlur}
                />
              )}
            />
            <Controller
              name="address.addressLine1"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  labelStyles={[styles.label]}
                  label="Restaurant Location"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Location 1"
                  error={errors?.address?.addressLine1?.message}
                  id="addressLine1"
                  touched={touchedFields?.address?.addressLine1}
                  onBlur={onBlur}
                />
              )}
            />
            <Controller
              name="address.addressLine2"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  labelStyles={[styles.label]}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Location 2 (if any)"
                  error={errors?.address?.addressLine2?.message}
                  id="addressLine2"
                  touched={touchedFields?.address?.addressLine2}
                  onBlur={onBlur}
                />
              )}
            />

            <TextInput
              labelStyles={[styles.label]}
              label="Operating Hours"
              value="8"
              onChangeText={(text) => console.log(text)}
              placeholder="Hrs"
            />
            <Controller
              name="panCard"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  labelStyles={[styles.label]}
                  label="PAN"
                  value={value}
                  onChangeText={onChange}
                  placeholder="PAN Number"
                  error={errors?.panCard?.message}
                  id="panCard"
                  maxLength={10}
                  touched={touchedFields.panCard}
                  onBlur={onBlur}
                />
              )}
            />
            {/* <CustomDatePicker onDateChange={handleDateChange} selectedDate={selectedDate} /> */}
            {/* <CustomTimePicker onTimeChange={handleDateChange} selectedTime={selectedDate} /> */}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleSubmit(onSubmit)}
          text="Continue"
          btnStyle={[styles.button]}
        ></Button>
      </View>
    </ProfileWrapper>
  );
}

export default index;
