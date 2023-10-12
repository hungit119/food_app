import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
  Image,
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
import RestaurantManager from "./RestaurantManager";
import CreateFoodRestaurant from "./CreateFoodRestaurant";

export default function ListFoodRestaurant() {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View className="space-y-6 pt-14 bg-white">
        <View className="mx-4 space-y-2 mb-2">
          <View className="flex flex-row items-center">
            <TouchableOpacity
              onPress={() => navigation.navigate(RestaurantManager)}
              className="text-base font-semibold"
            >
              <ArrowSmallLeftIcon size={hp(3)} color="black" />
            </TouchableOpacity>
            <Text className="text-base font-semibold text-center flex-1">
              Các món ăn trong nhà hàng
            </Text>
          </View>
        </View>
      </View>
      <Divide />
      <ScrollView>
        <View className="space-y-6">
          <View className="mx-4 mt-5 space-y-2 mb-2">
            <Text className="text-lg font-bold">Danh sách hiện có</Text>
          </View>
        </View>
        <View>
          <TouchableHighlight
            underlayColor="none"
            onPress={() => navigation.navigate("FoodDetailRestaurant")}
          >
            <View className="mx-4 mt-5 space-y-2 mb-2 shadow-sm bg-white py-4 rounded-md flex flex-row items-center px-2">
              <View className="w-32 mr-8">
                <Image
                  className="w-full h-20 "
                  source={require("../../../../assets/images/swiper2.jpg")}
                />
              </View>
              <View className="flex-1 ml-2">
                <Text className="text-base font-bold">Bánh mì muối ớt</Text>
                <Text className="pt-1 line-through font-thin">49.000đ</Text>
                <Text className="pt-1">30.000đ</Text>
              </View>
              <View className="flex items-center justify-center">
                <TouchableOpacity>
                  <EllipsisVerticalIcon size={hp(3)} color="#3BC5C9" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            underlayColor="none"
            onPress={() => navigation.navigate("FoodDetailRestaurant")}
          >
            <View className="mx-4 mt-5 space-y-2 mb-2 shadow-sm bg-white py-4 rounded-md flex flex-row items-center px-2">
              <View className="w-32 mr-8">
                <Image
                  className="w-full h-20 "
                  source={require("../../../../assets/images/swiper2.jpg")}
                />
              </View>
              <View className="flex-1 ml-2">
                <Text className="text-base font-bold">Bánh mì muối ớt</Text>
                <Text className="pt-1 line-through font-thin">49.000đ</Text>
                <Text className="pt-1">30.000đ</Text>
              </View>
              <View className="flex items-center justify-center">
                <TouchableOpacity>
                  <EllipsisVerticalIcon size={hp(3)} color="#3BC5C9" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            underlayColor="none"
            onPress={() => navigation.navigate("FoodDetailRestaurant")}
          >
            <View className="mx-4 mt-5 space-y-2 mb-2 shadow-sm bg-white py-4 rounded-md flex flex-row items-center px-2">
              <View className="w-32 mr-8">
                <Image
                  className="w-full h-20 "
                  source={require("../../../../assets/images/swiper2.jpg")}
                />
              </View>
              <View className="flex-1 ml-2">
                <Text className="text-base font-bold">Bánh mì muối ớt</Text>
                <Text className="pt-1 line-through font-thin">49.000đ</Text>
                <Text className="pt-1">30.000đ</Text>
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
            onPress={() => navigation.navigate("FoodDetailRestaurant")}
          >
            <View className="mx-4 mt-5 space-y-2 mb-2 shadow-sm bg-white py-4 rounded-md flex flex-row items-center px-2">
              <View className="w-32 mr-8">
                <Image
                  className="w-full h-20 "
                  source={require("../../../../assets/images/swiper2.jpg")}
                />
              </View>
              <View className="flex-1 ml-2">
                <Text className="text-base font-bold">Bánh mì muối ớt</Text>
                <Text className="pt-1 line-through font-thin">49.000đ</Text>
                <Text className="pt-1">30.000đ</Text>
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
            onPress={() => navigation.navigate(CreateFoodRestaurant)}
          >
            <View className="bg-[#3BC5C9] w-[70px] h-[70px] shadow-md rounded-full flex items-center justify-center">
              <PlusIcon size={hp(3)} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
