import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";
import FormInput from "../../components/FormInput";
import FormSubmitButton from "../../components/FormSubmitButton";
import { loginAuth } from "../../helpers/enpoint";
import { themeColors } from "../../theme";
import { useDispatch } from "react-redux";
import { setIsAuthenticate } from "../../features/auth/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../components/Button";

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const defaultValues = {
    email: "tranduyhungd@gmail.com",
    password: "1192002",
  };
  const validateSchema = Yup.object({
    email: Yup.string()
      .email("Không đúng định dạng")
      .required("Email không được bỏ trống !"),
    password: Yup.string()
      .trim()
      .min(6, "Mật khẩu ít nhất 6 kí tự")
      .required("Mật khẩu không được bỏ trống"),
  });

  const submitForm = async (values, formikActions) => {
    try {
      const { email, password } = values;
      const response = await loginAuth(email, password);
      if (response.success) {
        await AsyncStorage.setItem("accessToken", response.data.accessToken);
        dispatch(
          setIsAuthenticate({
            isAuthenticate: true,
            isLoading: false,
            user: response.data.user,
          })
        );
        navigation.navigate("Root");
      }
    } catch (error) {
      console.error("Đăng nhập không thành công", error.message);
    } finally {
      formikActions.setSubmitting(false);
    }
  };
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../../../assets/images/welcome.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 pt-8"
      >
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
            const { email, password } = values;
            return (
              <>
                <FormInput
                  value={email}
                  error={touched.email && errors.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  label="Email"
                  placeholder="example@gmail.com"
                  autoCapitalize="none"
                />
                <View className="mb-5"></View>
                <FormInput
                  value={password}
                  error={touched.password && errors.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  label="Mật khẩu"
                  placeholder="********"
                  autoCapitalize="none"
                  secureTextEntry
                />
                <View className="mb-5"></View>
                <FormSubmitButton onPress={handleSubmit} title="Đăng nhập" />
                {/* <Button /> */}
              </>
            );
          }}
        </Formik>
        <Text className="text-sm text-gray-700 font-bold text-center py-5">
          Hoặc
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../../../assets/icons/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../../../assets/icons/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../../../assets/icons/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Bạn chưa có tài khoản?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text className="font-semibold text-[#3BC5C9]">Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
