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
import ListFoodRestaurant from "./ListFoodRestaurant";

export default function FoodDetailRestaurant() {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View className="space-y-6 pt-14 bg-white">
        <View className="mx-4 space-y-2 mb-2">
          <View className="flex flex-row items-center">
            <TouchableOpacity
              onPress={() => navigation.navigate(ListFoodRestaurant)}
              className="text-base font-semibold"
            >
              <ArrowSmallLeftIcon size={hp(3)} color="black" />
            </TouchableOpacity>
            <Text className="text-base font-semibold text-center flex-1">
              Danh mục món ăn
            </Text>
          </View>
        </View>
      </View>
      <Divide />
      <ScrollView>
        <View className="space-y-6">
          <View className="mx-4 mt-5 space-y-2 mb-2">
            <Text className="text-lg font-bold">chi tiết</Text>
          </View>
        </View>
        <View>
          <Text className="font-semibold text-base">
            1.Bánh mì nướng muối ới bằng chào
          </Text>
          <Text>.</Text>
          <Text className="font-medium">Chế biến</Text>
          <Text>1 giờ</Text>
          <Text>.</Text>
          <Text className="font-medium">Độ khó</Text>
          <Text>Dễ</Text>
          <Text className="font-semibold text-base mt-4">
            Nguyên liệu làm Bánh mì nướng muối ớt bằng chảo
          </Text>
          <Text>.</Text>
          <Text className="font-medium">Bánh mì</Text>
          <Text>4 ổ</Text>
          <Text>.</Text>
          <Text className="font-medium">Xúc xích</Text>
          <Text>2 cái</Text>
          <Text>.</Text>
          <Text className="font-medium">Tép khô</Text>
          <Text>1 ít</Text>
          <Text>.</Text>
          <Text className="font-medium">Bơ</Text>
          <Text>1 hộp</Text>
        </View>
      </ScrollView>
    </View>
  );
}
