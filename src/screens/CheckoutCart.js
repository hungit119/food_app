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
      <View className="  bg-slate-50 h-[100px] justify-center items-center ">
        <Text className="font-semibold text-base mt-4">Trang Thanh Toán</Text>

        <View className="absolute left-3  ">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className=" bg-white p-2 rounded-full ml-4   "
          >
            <ArrowLeftIcon size="30" color="#3ac5c9" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="h-[72%]">
        <View style={{ paddingHorizontal: 14 }}>
          <View className="flex-row justify-between mt-3 ">
            <Text className="font-medium">Giao bởi tài xế</Text>
            <TouchableHighlight>
              <Text className="font-semibold color-[#3ac5c9]"> Thay đổi</Text>
            </TouchableHighlight>
          </View>
          <View className="flex-row justify-between mt-4 ml-6">
            <View>
              <Text className="font-semibold text-2xl">Đại học xây dựng</Text>
              <Text className="font-thin">Đại học xây dựng,giải phóng....</Text>
              <Text className="font-thin">
                + Thêm vào tòa nhà , tầng, số phòng
              </Text>
            </View>
            <View>
              <TouchableHighlight>
                <Icon
                  className=" "
                  name="angle-right"
                  color="black"
                  size={25}
                />
              </TouchableHighlight>
            </View>
          </View>

          <View className="bg-slate-200 mt-4 h-[0.5]"></View>

          <View className="bg-slate-50 pt-3 " style={{ paddingHorizontal: 15 }}>
            <Text className="font-thin">Đơn hàng của bạn</Text>
            <View className="flex-row justify-between mt-4">
              <TouchableHighlight onPress={() => navigation.goBack()}>
                <View className="flex-row">
                  <Text className="mr-1 font-thin ">1x</Text>
                  <Text>Cơm thố bò</Text>
                </View>
              </TouchableHighlight>
              <View className="flex-row">
                <Text className="mr-1 mt-1">60.000đ</Text>
                <TouchableHighlight>
                  <Icon className=" " name="close" color="#555555" size={21} />
                </TouchableHighlight>
              </View>
            </View>
            <View className="flex-row justify-between mt-4">
              <TouchableHighlight onPress={() => navigation.goBack()}>
                <View className="flex-row">
                  <Text className="mr-1 font-thin ">1x</Text>
                  <Text>Cơm thố bò</Text>
                </View>
              </TouchableHighlight>
              <View className="flex-row">
                <Text className="mr-1 mt-1">60.000đ</Text>
                <TouchableHighlight>
                  <Icon className=" " name="close" color="#555555" size={21} />
                </TouchableHighlight>
              </View>
            </View>
            <View className="mt-6">
              <TouchableHighlight onPress={() => navigation.goBack()}>
                <Text className="font-semibold color-[#3ac5c9]">
                  + Thêm món
                </Text>
              </TouchableHighlight>
            </View>
            <View className="bg-slate-200 mt-3 h-[0.5]"></View>

            <View className="flex-row justify-between mt-5  p-1">
              <View className="flex-row">
                <Icon className="" name="database" color="#555555" size={21} />
                <View className="ml-2 -mt-1">
                  <Text className="font-semibold">
                    Dùng xu để được giảm giá nha !
                  </Text>
                  <Text className="font-thin mt-2">Bạn đang có 0 xu</Text>
                </View>
              </View>
              <TouchableHighlight>
                <Text style={{ color: "#3ac5c9", fontWeight: "600" }}>
                  Dùng xu
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View className=" bg-slate-100 p-2" style={{ paddingHorizontal: 15 }}>
            <View className="flex-row justify-between">
              <Text className="p-2">Tạm tính</Text>
              <Text>60.000đ</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="p-2">Phí áp dụng:0.2km</Text>
              <Text>19.000đ</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="p-2" style={{ color: "#3ac5c9" }}>
                Quán khao 10K cho đơn từ 49k
              </Text>
              <Text>-10.000đ</Text>
            </View>
          </View>

          <View className="w-full bg-slate-300 h-[0.5]"></View>

          <View className="bg-slate-50 mt-8 w-[100%] pt-3   ">
            <View>
              <Text className="font-semibold ml-2">
                Tip thêm cho tài xế nhé{" "}
              </Text>
              <Text className="font-thin ml-2">
                Tài xế sẽ nhận được 100% tiền tip từ bạn{" "}
              </Text>

              <View className="bg-slate-200 rounded-md  ml-20 mt-9 p-2 justify-center">
                <Text className="font-thin ml-2">
                  Dùng phương thức thanh toán không dùng tiền
                </Text>
                <Text className="font-thin ml-2">mặt để tip cho tài xế</Text>
              </View>
            </View>
            <View className="-mt-24 ml-2 ">
              <Image
                style={{ width: "20%", height: "50%" }}
                source={require("../../assets/images/shiper1.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="">
        <View className="">
          <View className="flex-row justify-around  mt-3 ">
            <View className="flex-row">
              <Icon className="" name="money" color="#555555" size={21} />
              <Text className="font-semibold mt-1"> Tiền mặt</Text>
            </View>
            <View>
              <Icon className="" name="chevron-up" color="#555555" size={21} />
            </View>
            <View className="border-r-2  h-7" />
            <TouchableHighlight className="">
              <Text className="font-semibold" style={{ color: "#3ac5c9" }}>
                THÊM COUPON
              </Text>
            </TouchableHighlight>
          </View>
        </View>

        <View
          className="flex-row justify-between pt-3 "
          style={{ paddingHorizontal: 80 }}
        >
          <View>
            <Text className="line-through font-thin">82.000đ</Text>
            <Text className="font-bold">72.000đ</Text>
          </View>
          <TouchableHighlight className="rounded-lg bg-[#3ac5c9]  ">
            <Text className="text-xl ml-10 mt-3 font-semibold  w-32 h-11 text-cyan-50 ">
              Đặt hàng
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
export default CheckoutCart;
