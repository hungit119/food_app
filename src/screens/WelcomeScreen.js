import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">
          Hãy chọn ngày, bạn muốn ăn gì nào hôm nay?
        </Text>
        <View className="flex-row justify-center">
          <Image
            source={require("../../assets/images/welcome.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="py-3 bg-white mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Đăng nhập
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-gray-700 font-semibold">
              Bạn có sẵn sàng để tạo tài khoản?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="font-semibold text-white"> Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
