import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

const SildeFood = () => {
  return (
    <View className="flex mt-4 justify-center m-5 rounded-xl items-center bg-slate-500 h-48  ">
      <Swiper className="rounded-xl" autoplay={true} activeDotColor="white">
        <View className="flex-1 justify-center items-center rounded-xl   ">
          <Image
            className="w-full h-full rounded-xl"
            source={require("../../../assets/images/swiper1.jpg")}
          />
        </View>
        <View className="flex-1 justify-center items-center rounded-xl  ">
          <Image
            className="w-full h-full rounded-xl"
            source={require("../../../assets/images/swiper2.jpg")}
          />
        </View>
        <View className="flex-1 justify-center items-center  rounded-xl  ">
          <Image
            className="w-full h-full rounded-xl"
            source={require("../../../assets/images/swiper3.jpg")}
          />
        </View>
        <View className="flex-1 justify-center items-center  rounded-xl  ">
          <Image
            className="w-full h-full rounded-xl"
            source={require("../../../assets/images/swiper4.jpg")}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default SildeFood;

const styles = StyleSheet.create({});
