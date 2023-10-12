import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ArrowSmallLeftIcon,
  MapPinIcon,
  PlusIcon,
  EllipsisVerticalIcon,
} from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Divide from "../../../components/Divide";
import { useNavigation } from "@react-navigation/native";

const RestaurantManager = () => {
  const navigation = useNavigation();
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
              Quản lý nhà hàng
            </Text>
          </View>
        </View>
      </View>
      <Divide />
      <ScrollView>
        <View className="space-y-6">
          <View className="mx-4 mt-5 space-y-2 mb-2">
            <Text className="text-lg font-bold">
              Danh sách các nhà hàng của bạn
            </Text>
          </View>
        </View>
        <View>
          <TouchableHighlight
            underlayColor="none"
            onPress={() => navigation.navigate("ListFoodRestaurant")}
          >
            <View className="mx-4 mt-5 space-y-2 mb-2 shadow-sm bg-white py-4 rounded-md flex flex-row items-center px-2">
              <View className="w-[50px] h-[50px] border border-[#3BC5C9] rounded-full flex items-center justify-center bg-[#3BC5C9]">
                <MapPinIcon size={hp(3)} color="white" />
              </View>
              <View className="flex-1 ml-2">
                <Text className="text-base font-bold">Nhà hàng HUCE</Text>
                <Text className="pt-1">
                  55 Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội
                </Text>
              </View>
              <View className="flex items-center justify-center">
                <TouchableOpacity>
                  <EllipsisVerticalIcon size={hp(3)} color="#3BC5C9" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="none"
            onPress={() => navigation.navigate("ListFoodRestaurant")}
          >
            <View className="mx-4 mt-5 space-y-2 mb-2 shadow-sm bg-white py-4 rounded-md flex flex-row items-center px-2">
              <View className="w-[50px] h-[50px] border border-[#3BC5C9] rounded-full flex items-center justify-center bg-[#3BC5C9]">
                <MapPinIcon size={hp(3)} color="white" />
              </View>
              <View className="flex-1 ml-2">
                <Text className="text-base font-bold">Nhà hàng HUCE</Text>
                <Text className="pt-1">
                  55 Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội
                </Text>
              </View>
              <View className="flex items-center justify-center">
                <TouchableOpacity>
                  <EllipsisVerticalIcon size={hp(3)} color="#3BC5C9" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="none"
            onPress={() => navigation.navigate("ListFoodRestaurant")}
          >
            <View className="mx-4 mt-5 space-y-2 mb-2 shadow-sm bg-white py-4 rounded-md flex flex-row items-center px-2">
              <View className="w-[50px] h-[50px] border border-[#3BC5C9] rounded-full flex items-center justify-center bg-[#3BC5C9]">
                <MapPinIcon size={hp(3)} color="white" />
              </View>
              <View className="flex-1 ml-2">
                <Text className="text-base font-bold">Nhà hàng HUCE</Text>
                <Text className="pt-1">
                  55 Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội
                </Text>
              </View>
              <View className="flex items-center justify-center">
                <TouchableOpacity>
                  <EllipsisVerticalIcon size={hp(3)} color="#3BC5C9" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
      <View className="space-y-6 flex flex-row justify-end mb-10">
        <View className="mx-4 space-y-2 mb-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("FormRestaurant")}
          >
            <View className="bg-[#3BC5C9] w-[70px] h-[70px] shadow-md rounded-full flex items-center justify-center">
              <PlusIcon size={hp(3)} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RestaurantManager;
