import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Table, TableWrapper, Row, Col } from "react-native-table-component";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { CachedImage } from "../helpers/image";
import Icon from "react-native-vector-icons/FontAwesome";
import {v4} from "uuid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
} from "react-native-heroicons/outline";
import {
  HeartIcon,
  Square3Stack3DIcon,
  UsersIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Loading from "../components/loading";
import YouTubeIframe from "react-native-youtube-iframe";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { baseApiUrl } from "../constants";
import { setAddToTalAmount, setOrder, setOrderDetails } from "../features/order/orderSlice";

export default function FoodDetail({ route, navigation }) {
  const { food } = route.params;
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const order = useSelector((state) => state.order.order);
  const user = useSelector((state) => state.auth.user);

  const totalPrice = count * food.prize;

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handlePressAddOrderDetail = () => {
    if (!order.id) {
      createNewOrderAndInitOrderDetail();
    }
    else{
      createOrderDetail(order.id);
    }
    return navigation.goBack();
  };
  const createNewOrderAndInitOrderDetail = async () => {
    try {
      const response = await axios.post(
        baseApiUrl + "/api/order/create-new-order",
        {
          restaurent_id: food.restaurent_id,
          sid:'12345',
          customer_id: user.id,
        }
      );
      if (response.data.success) {
        console.log(response.data);
        dispatch(setOrder(response.data.data))
        createOrderDetail(response.data.data.id);
      }
    } catch (error) {
      throw error;
    }
  };
  const createOrderDetail = async (order_id) => {
    try {
      const response = await axios.post(baseApiUrl + '/api/order-detail/create-order-detail-by-order-id',{
        order_id:order_id,
        sid:'12345',
        food_id:food.id,
        quantity:count
      })
      if (response.data.success) {
        dispatch(setOrderDetails(response.data.data));
        dispatch(setAddToTalAmount(totalPrice));
      }
    } catch (error) {
      throw error;
    }
  }
  return (
    <View
      className="bg-white flex-1 relative "
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style={"light"} />
      <View className="flex-row justify-center   ">
        <CachedImage
          uri={food?.thumbnail}
          style={{
            width: wp(100),
            height: hp(35),
            marginTop: 1,
          }}
        />
      </View>

      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute flex-row justify-between items-center pt-14"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-5 bg-white"
        >
          <ArrowLeftIcon size="30" color="#3ac5c9" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFavourite(!isFavourite)}
          className="p-2 rounded-full mr-5 bg-white"
        >
          <HeartIcon
            size={hp(3.5)}
            strokeWidth={4.5}
            color={isFavourite ? "red" : "gray"}
          />
        </TouchableOpacity>
      </Animated.View>

      <ScrollView className=" absolute top-72 ">
        <View className="  bg-white px-2">
          <View className="flex-row justify-between ">
            <Text className="ml-2 text-3xl ">{food?.title}</Text>
            <View className=" mr-3">
              <Text className="text-lg">{food?.prize} VND</Text>
            </View>
          </View>
          <Text className="mx-2 mt-4 font-light">{food.description}</Text>
          <View className="mx-2 mt-8 flex-row mb-2">
            <Icon name="file-text-o" size={21} />
            <TextInput
              className="ml-2"
              placeholder="Bạn có gì muốn nhắn với nhà hàng không ?"
            />
          </View>
        </View>

        {/* <View className="pb-52  ">
          <View className="bg-slate-100 mt-5  h-16 justify-center  ">
            <Text className="ml-5 text-base font-medium">Nước giải khát</Text>
            <Text className="ml-5 text-sm font-extralight">Chọn tối đa 5</Text>
          </View>
          <View className="mt-2">
            <View
              className="flex-row justify-between p-2  "
              style={{ paddingHorizontal: 15 }}
            >
              <View className="flex-row items-center  ">
                <TouchableHighlight
                  onPress={increaseCount}
                  className="rounded-lg bg-slate-100 p-1"
                >
                  <Icon className=" " name="plus" color="#3ac5c9" size={21} />
                </TouchableHighlight>
                <Text className="ml-2 font-medium ">Sữa ngô</Text>
              </View>
              <Text className="font-normal">18.000đ</Text>
            </View>
            <View
              className="flex-row justify-between p-2  "
              style={{ paddingHorizontal: 15 }}
            >
              <View className="flex-row items-center  ">
                <TouchableHighlight
                  onPress={increaseCount}
                  className="rounded-lg bg-slate-100 p-1"
                >
                  <Icon className=" " name="plus" color="#3ac5c9" size={21} />
                </TouchableHighlight>
                <Text className="ml-2 font-medium ">Sữa dâu</Text>
              </View>
              <Text className="font-normal">18.000đ</Text>
            </View>
          </View>
        </View> */}
      </ScrollView>
      {/* cartIcon */}
      <View className="flex-row justify-around bg-slate-50 absolute bottom-2 h-24  w-full  p-4">
        <View className="flex-row items-center">
          <TouchableHighlight
            onPress={decreaseCount}
            className="rounded-lg p-1 bg-slate-100"
          >
            <Icon className="  " name="minus" color="#3ac5c9" size={25} />
          </TouchableHighlight>
          <Text className="ml-2 mr-2 text-cyan-200 text-xl font-semibold  font">
            {count}
          </Text>
          <TouchableHighlight
            onPress={increaseCount}
            className="rounded-lg p-1 bg-slate-100"
          >
            <Icon className="  " name="plus" color="#3ac5c9" size={25} />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => handlePressAddOrderDetail()}
            className="border-solid border-1 mt-2 w-48 h-14 rounded-lg bg-[#3ac5c9]  "
          >
            <View className="flex-row justify-center mt-4">
              <Text className="font-semibold text-cyan-50 text-base ">
                Thêm{" "}
              </Text>
              <Text className="text-cyan-50 font-semibold text-base">
                {totalPrice}.đ
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
