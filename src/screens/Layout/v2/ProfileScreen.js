import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ArrowSmallLeftIcon,
  DocumentTextIcon,
  HeartIcon,
  MapPinIcon,
  ChevronRightIcon,
  CreditCardIcon,
  NoSymbolIcon,
  StarIcon,
  BellIcon,
  PhoneArrowDownLeftIcon,
  InformationCircleIcon,
  HomeModernIcon,
  MapIcon
} from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Divide from "../../../components/Divide";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const user = useSelector((state) => state.auth.user);
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View className="space-y-6 pt-14 bg-white">
        <View className="mx-4 space-y-2 mb-2">
          <View className="flex flex-row items-center">
            <TouchableOpacity onPress={() => navigation.goBack()} className="text-base font-semibold">
              <ArrowSmallLeftIcon size={hp(3)} color="black" />
            </TouchableOpacity>
            <Text className="text-base font-semibold text-center flex-1">
              Thông tin tài khoản
            </Text>
          </View>
        </View>
      </View>
      <Divide />
      <ScrollView>
        <View className="space-y-6 bg-white">
          <View className="mx-4 space-y-2 py-3">
            <View className="flex flex-row items-center gap-1">
              <View>
                <Image
                  source={require("../../../../assets/images/avatar.png")}
                  style={{ height: hp(8), width: hp(8) }}
                />
              </View>
              <View className="flex-1">
                {user.name ? (
                  <View>
                    <Text className="text-lg font-bold text-[#3BC5C9]">
                      {user.name}
                    </Text>
                    <View className="flex flex-row justify-between">
                      <Text>
                        {user.email}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <View>
                    <Text className="text-lg font-bold text-[#3BC5C9]">
                      Đăng nhập
                    </Text>
                    <View className="flex flex-row justify-between">
                      <Text>
                        Bao nhiêu món ăn ngon, deals xịn đang chờ bạn kìa!
                      </Text>
                    </View>
                  </View>
                )}
              </View>
              <View>
                <TouchableOpacity className="text-base font-semibold">
                  <ChevronRightIcon size={hp(2)} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <Divide />
        <View className="flex flex-row bg-white">
          <View className="flex-1 border-r-[1px] border-gray-300 py-5 items-center">
            <TouchableOpacity className="text-base font-semibold items-center">
              <DocumentTextIcon size={hp(4)} color="black" />
            </TouchableOpacity>
            <Text className="mt-1">Đơn hàng</Text>
          </View>
          <View className="flex-1 border-r-[1px] border-gray-300 py-5 items-center">
            <TouchableOpacity className="text-base font-semibold items-center">
              <HeartIcon size={hp(4)} color="black" />
            </TouchableOpacity>
            <Text className="mt-1">Quán yêu thích</Text>
          </View>
          <View className="flex-1 py-5 items-center">
            <TouchableOpacity className="text-base font-semibold items-center">
              <MapPinIcon size={hp(4)} color="black" />
            </TouchableOpacity>
            <Text className="mt-1">Sổ địa chỉ</Text>
          </View>
        </View>
        <Divide />
        <View className="bg-white">
          <View className="p-3">
            <Image
              source={require("../../../../assets/images/banner-profile-1.jpg")}
              className="h-[80px] w-[100%] rounded-[5px]"
            />
          </View>
        </View>
        <View className="mt-5 bg-white">
          <View className="mx-4 space-y-2 py-3 ">
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantManager")}
            >
              <View className="flex flex-row items-center gap-5">
                <HomeModernIcon size={hp(3)} color="black" />
                <Text className="text-base font-medium">Quản lý nhà hàng</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Divide />
          <View className="mx-4 space-y-2 py-3 ">
            <TouchableOpacity>
              <View className="flex flex-row items-center gap-5">
                <CreditCardIcon size={hp(3)} color="black" />
                <Text className="text-base font-medium">
                  Quản lý thanh toán
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Divide />
          <View className="mx-4 space-y-2 py-3 ">
            <TouchableOpacity>
              <View className="flex flex-row items-center gap-5">
                <NoSymbolIcon size={hp(3)} color="black" />
                <Text className="text-base font-medium">
                  Chia sẻ thông tin cá nhân
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="mx-4 space-y-2 py-3 ">
            <TouchableOpacity onPress={() => navigation.navigate("Map")}>
              <View className="flex flex-row items-center gap-5">
                <MapIcon size={hp(3)} color="black" />
                <Text className="text-base font-medium">
                  Bản đồ
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </View>

        <View className="mt-5 bg-white">
          <View className="mx-4 space-y-2 py-3 ">
            <TouchableOpacity>
              <View className="flex flex-row items-center gap-5">
                <StarIcon size={hp(3)} color="black" />
                <Text className="text-base font-medium">Đánh giá Foody</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Divide />
          <View className="mx-4 space-y-2 py-3 ">
            <TouchableOpacity>
              <View className="flex flex-row items-center gap-5">
                <BellIcon size={hp(3)} color="black" />
                <Text className="text-base font-medium">Thông báo</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Divide />
          <View className="mx-4 space-y-2 py-3 ">
            <TouchableOpacity>
              <View className="flex flex-row items-center gap-5">
                <PhoneArrowDownLeftIcon size={hp(3)} color="black" />
                <Text className="text-base font-medium">Hỗ trợ</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Divide />
          <View className="mx-4 space-y-2 py-3 ">
            <TouchableOpacity>
              <View className="flex flex-row items-center gap-5">
                <InformationCircleIcon size={hp(3)} color="black" />
                <Text className="text-base font-medium">
                  Điều khoản và chính sách
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Divide />
          <View className="mx-4 space-y-2 py-3 ">
            <TouchableOpacity>
              <View className="flex flex-row items-center gap-5">
                <InformationCircleIcon size={hp(3)} color="black" />
                <Text className="text-base font-medium">
                  Chính sách bảo vệ dữ liệu cá nhân
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Divide />
        </View>
        <View className="bg-white mt-5">
          <View className="p-3">
            <Image
              source={require("../../../../assets/images/banner-profile-2.jpg")}
              className="h-[80px] w-[100%] rounded-[5px]"
            />
          </View>
        </View>
        <View className="mt-5 mb-5 bg-white">
          <View className="mx-4 space-y-2 py-3 ">
            <TouchableOpacity>
              <View className="flex flex-row items-center gap-5">
                <Text className="text-base font-medium">
                  Phiên bản hiện tại: Limited V0.0.0
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
