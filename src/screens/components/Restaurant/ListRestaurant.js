import { View, Text, Image } from "react-native";
import React from "react";

const ListRestaurant = () => {
  return (
    <View>
      <View>
        <Text>
          <Image
            className="w-full h-full rounded-xl"
            source={require("../../../../assets/images/swiper1.jpg")}
          />
        </Text>
      </View>
    </View>
  );
};

export default ListRestaurant;
