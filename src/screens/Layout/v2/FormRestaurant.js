import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { ArrowSmallLeftIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Divide from "../../../components/Divide";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import FormInput from "../../../components/FormInput";
import Button from "../../../components/Button";

const FormRestaurant = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const defaultValues = {
    name: "",
    address: "",
  };
  const validateSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(6, "Tên nhà hàng chưa ít nhất 3 kí tự")
      .required("Tên nhà hàng không được bỏ trống !"),
    address: Yup.string()
      .trim()
      .min(6, "Địa chỉ ít nhất 6 kí tự")
      .required("Địa chỉ không được bỏ trống"),
  });
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View className="space-y-6 pt-14 bg-white">
        <View className="mx-4 space-y-2 mb-2">
          <View className="flex flex-row items-center">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="text-base font-semibold"
            >
              <ArrowSmallLeftIcon size={hp(3)} color="black" />
            </TouchableOpacity>
            <Text className="text-base font-semibold text-center flex-1">
              Thêm nhà hàng
            </Text>
          </View>
        </View>
      </View>
      <Divide />
      <ScrollView className="h-[100%] bg-white">
        <View className="space-y-6 h-[100%]">
          <View className="flex-1 px-4 pt-4">
            <Formik
              initialValues={defaultValues}
              validationSchema={validateSchema}
              onSubmit={(values, formikActions) =>
                submitForm(values, formikActions)
              }
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => {
                const { name, address } = values;
                return (
                  <>
                    <FormInput
                      value={name}
                      error={touched.name && errors.name}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      label="Tên nhà hàng"
                      placeholder="Tên nhà hàng..."
                      autoCapitalize="none"
                    />
                    <View className="mb-5"></View>
                    <FormInput
                      value={address}
                      error={touched.address && errors.address}
                      onChangeText={handleChange("address")}
                      onBlur={handleBlur("address")}
                      label="Địa chỉ"
                      placeholder="Địa chỉ..."
                      autoCapitalize="none"
                      className="h-[200px] p-[18px] rounded-[10px] bg-[#f0f0f0]"
                    />
                    <View className="mb-5"></View>
                    {/* <FormSubmitButton onPress={handleSubmit} title="Đăng nhập" /> */}
                    <Button title={"Thêm nhà hàng"} className="h-[100px]" />
                  </>
                );
              }}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FormRestaurant;
