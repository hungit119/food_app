import { Pressable, View, Text } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { CachedImage } from "../../helpers/image";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function FoodCard({ item, index, navigation }) {
  let isEven = index % 2 == 0;
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <Pressable
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        className="flex justify-center mb-4 space-y-1"
        onPress={() => navigation.navigate("FoodDetail", { ...item })}
      >
        <View className=" rounded-3xl bg-slate-50 h-[350px] mt-4 ">
          <CachedImage
            // uri={item.strMealThumb}
            style={{
              width: "100%",
              height: "50%",
              borderRadius: 24,
            }}
            className="bg-black/5  "
            // sharedTransitionTag={item.strMeal}
          />
          <Text
            style={{ fontSize: hp(1.5) }}
            className="font-bold ml-3 mt-3 text-neutral-950 text-left"
          >
            {/* {item.strMeal.length > 20
              ? item.strMeal.slice(0, 20) + "..."
              : item.strMeal} */}
          </Text>

          <View className=" justify-center items-start ">
            <View className="flex-row items-center ml-3 mt-4 mb-1">
              <Icon name="bookmark-o" size={21} color="gold" />
              <Text className="text-amber-300 ml-1">20%</Text>
              <Text className=" text-slate-300  ml-3 line-through">
                50.000đ
              </Text>
            </View>
            <Text className="ml-3 mb-2">30.000đ</Text>
            <View className="flex-row items-center  ml-2 mt-2">
              <Icon name="star" size={21} color="gold" />
              <Text className="text-xs ">5</Text>
              <Text className="text-gray-400  p-1">|</Text>
              <Text className="text-xs">(5k5 review)</Text>
              <Text className="text-gray-400 p-1 ">|</Text>
              <Text className="text-xs">0.6km</Text>
            </View>
            <View className="flex-row  space-x-1 ml-3 mt-1">
              <Icon name="map-marker" size={18} color="gray" />
              <Text className="text-gray-900 text-xs pb-2  ">
                Đại học xây dựng
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}
