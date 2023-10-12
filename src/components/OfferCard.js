import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import CartImg from "../../assets/images/swiper2.jpg";

const OfferCard = () => {
  return (
    <View className="flex-row max-w-[250px] py-2 mr-6 bg-[#c7c7c7] rounded-2xl">
      <View className="px-4 py-2">
        <Text className="font-extrabold text-2xl">50% Off</Text>
        <Text className="text-lg">On everything today</Text>
        <Text className="text-xs my-2">With code: FSCREATION</Text>

        <Pressable className="bg-black w-20 rounded-2xl">
          <Text className="text-white text-xs font-semibold mx-3 my-1">
            Get Now
          </Text>
        </Pressable>
      </View>
      <View className="mt-2 absolute">
        <Image source={CartImg} className="object-contain h-[150px] w-[55px]" />
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({});
