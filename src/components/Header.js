import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  EnvelopeIcon,
  MapPinIcon,
  Bars3Icon,
} from "react-native-heroicons/outline";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const navigation = useNavigation();
  return (
    <View>
      <View className="mx-4 flex-row justify-between items-center mb-2">
        <View className="flex flex-row items-center gap-2">
          <MapPinIcon size={hp(3)} color="black" />
          <Text>{user.email}</Text>
        </View>
        <View className="flex flex-row gap-10">
          <EnvelopeIcon size={hp(3)} color="black" />
          <TouchableOpacity onPress={() => navigation.navigate("ProfileV2")}>
            <Bars3Icon size={hp(3)} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
