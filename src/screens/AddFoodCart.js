import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

function CheckoutCart() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView className="h-[87%]">
        <View>
          <Image
            className="w-full h-60 "
            source={require("../../assets/images/swiper1.jpg")}
          />
        </View>
        <View className="flex-row justify-start absolute top-10  ">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className=" bg-white p-2 rounded-full ml-4   "
          >
            <ArrowLeftIcon size="30" color="#3ac5c9" />
          </TouchableOpacity>
        </View>

        <View className="bg-slate-50 w-80 h-28 items-center justify-center ml-14 rounded-md absolute top-52">
          <Text
            className="font-semibold text-lg mb-2"
            style={{ color: "#FF6600" }}
          >
            ĐỐi TÁC CỦA FOODY
          </Text>
          <Text className="font-bold text-lg">CƠM GÀ -DUY HÙNG</Text>
          <Text className="font-light">0.2km. Số 2/73 Hoàng Ngân, Hà Nội</Text>
        </View>

        <View className="mt-24 px-4 ">
          <View className="flex-row justify-between p-1 ">
            <View className="flex-row items-center">
              <Icon className=" " name="user-o" color="black" size={21} />
              <Text className="ml-2 mb-3 ">Giao bởi tài xế</Text>
            </View>
            <TouchableOpacity>
              <Text style={{ color: "#3ac5c9" }} className="font-semibold">
                Thay đổi
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between p-1  ">
            <View className="flex-row items-center ">
              <TouchableOpacity className="flex-row justify-between w-full">
                <View className="flex-row">
                  <Icon
                    className=" "
                    name="pencil-square-o"
                    color="#FF6600"
                    size={21}
                  />
                  <Text style={{ color: "#FF6600" }} className="ml-2  ">
                    FOODY Khao Thêm 14K Cho Đơn Từ 69K
                  </Text>
                </View>
                <Text style={{ color: "#3ac5c9" }} className="font-semibold">
                  Xem Thêm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-4">
            <TouchableOpacity className="flex-row justify-between   ">
              <View className="flex-row items-center ">
                <Icon className=" " name="star" color="#FFCC00" size={21} />
                <Text className="font-bold"> 4.2</Text>
                <Text className="ml-2 ">(999+)</Text>
              </View>
              <View className="flex-row items-center ">
                <Icon
                  className=" "
                  name="shopping-cart"
                  color="#222222"
                  size={21}
                />
                <Text className="ml-2 font-bold">999+ đã bán</Text>
              </View>
              <Text style={{ color: "#3ac5c9" }} className="font-bold">
                Xem đánh giá
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-slate-200 mt-4 h-[0.5]"></View>

        <View className="px-4">
          <Text className="font-semibold text-xl mt-5 ml-1">
            Gọi thêm món trong nhà hàng
          </Text>
        </View>
        <View
          className=" flex-row gap-4 grid items-center justify-center mt-3  "
          style={{ flexWrap: "wrap" }}
        >
          <TouchableHighlight className="w-[40%]">
            <View>
              <Image
                className="w-full h-44 rounded-lg"
                source={require("../../assets/images/swiper2.jpg")}
              />
              <View className="ml-2">
                <Text className="font-semibold mt-2">Bánh mì Pate Trứng</Text>
                <Text className="mt-1">16.000đ</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight className="w-[40%]">
            <View>
              <Image
                className="w-full h-44 rounded-lg"
                source={require("../../assets/images/swiper2.jpg")}
              />
              <View className="ml-2">
                <Text className="font-semibold mt-2">Bánh mì Pate Trứng</Text>
                <Text className="mt-1">16.000đ</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight className="w-[40%]">
            <View>
              <Image
                className="w-full h-44 rounded-lg"
                source={require("../../assets/images/swiper2.jpg")}
              />
              <View className="ml-2">
                <Text className="font-semibold mt-2">Bánh mì Pate Trứng</Text>
                <Text className="mt-1">16.000đ</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight className="w-[40%]">
            <View>
              <Image
                className="w-full h-44 rounded-lg"
                source={require("../../assets/images/swiper2.jpg")}
              />
              <View className="ml-2">
                <Text className="font-semibold mt-2">Bánh mì Pate Trứng</Text>
                <Text className="mt-1">16.000đ</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View className="mt-3 px-4">
          <Text className="text-xl font-semibold ml-1">
            Combo bữa ăn diệu kì cùng Coca-Cola
          </Text>
        </View>
        <View className="flex-row justify-between mt-7 px-4">
          <View className="ml-4">
            <Text className=" font-medium">Bánh mì Pate -1 Coca-Cola</Text>
            <Text className="mt-4">20.000đ</Text>
          </View>
          <View className="w-36 ">
            <Image
              className="w-full h-20 rounded-lg "
              source={require("../../assets/images/swiper2.jpg")}
            />
          </View>
        </View>
        <View className="flex-row justify-between mt-7 px-4">
          <View className="ml-4">
            <Text className=" font-medium">Bánh mì Pate -1 Coca-Cola</Text>
            <Text className="mt-4">20.000đ</Text>
          </View>
          <View className="w-36 ">
            <Image
              className="w-full h-20 rounded-lg "
              source={require("../../assets/images/swiper2.jpg")}
            />
          </View>
        </View>
        <View className="flex-row justify-between mt-7 px-4">
          <View className="ml-4">
            <Text className=" font-medium">Bánh mì Pate -1 Coca-Cola</Text>
            <Text className="mt-4">20.000đ</Text>
          </View>
          <View className="w-36 ">
            <Image
              className="w-full h-20 rounded-lg "
              source={require("../../assets/images/swiper2.jpg")}
            />
          </View>
        </View>
        <View className="flex-row justify-between mt-7 px-4">
          <View className="ml-4">
            <Text className=" font-medium">Bánh mì Pate -1 Coca-Cola</Text>
            <Text className="mt-4">20.000đ</Text>
          </View>
          <View className="w-36 ">
            <Image
              className="w-full h-20 rounded-lg "
              source={require("../../assets/images/swiper2.jpg")}
            />
          </View>
        </View>
        <View className="px-4">
          <Text className="text-xl font-semibold mt-7 ml-1">
            Đồ uống / Drink
          </Text>
          <View>
            <TouchableHighlight>
              <View className="flex-row justify-between">
                <View className="mt-3 ml-5">
                  <Text className="font-medium text-base">Pepsi lon</Text>
                  <Text className="mt-3">15.000đ</Text>
                </View>
                <View className="w-20 h-8">
                  <Image
                    className="w-full h-32 "
                    source={require("../../assets/images/Pepsi.jpg")}
                  />
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View className="flex-row justify-between mt-20">
                <View className="mt-3 ml-5">
                  <Text className="font-medium text-base">Coca-Cola</Text>
                  <Text className="mt-3">15.000đ</Text>
                </View>
                <View className="w-11 h-5 mr-4">
                  <Image
                    className="w-full h-28 "
                    source={require("../../assets/images/CocaCola.jpg")}
                  />
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
      <View className=" bg-slate-200 h-60">
        <View>
          <Text className="font-bold mt-3 ml-6">
            Bạn vừa tiết kiệm 20k Quán Khao 25k Cho Đơn 90k
          </Text>
        </View>
        <View className="flex-row justify-around  mt-4  ">
          <TouchableHighlight>
            <View
              className="flex-row rounded-lg border   p-3"
              style={{ borderColor: "#3ac5c9" }}
            >
              <Icon
                className=""
                name="shopping-bag"
                color="#3ac5c9"
                size={21}
              />
              <Text
                style={{ color: "#3ac5c9" }}
                className=" text-xl font-semibold  ml-3  "
              >
                1{" "}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            className="rounded-lg bg-[#3ac5c9] justify-center "
            onPress={() => navigation.navigate("CheckoutCart")}
          >
            <View className="p-3">
              <Text className="text-base font-semibold text-cyan-50">
                Trang thanh toán : 80.000đ
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
export default CheckoutCart;
