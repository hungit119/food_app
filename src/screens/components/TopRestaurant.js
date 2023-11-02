import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors, shadow, sizes, spacing } from "../../theme/themeV2/theme";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { baseApiUrl } from "../../constants";
import axios from "axios";

const CARD_WIDTH = sizes.width - 250;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopRestaurant = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [restaurents, setRestaurents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();

  const fetchRestaurents = async () => {
    try {
      const response = await axios.get(baseApiUrl + "/api/restaurent");
      if (response.data.success) {
        setIsLoading(false);
        setRestaurents(response.data.data.data);
      }
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchRestaurents();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: 10,
        }}
      >
        <View className="flex flex-row justify-between items-center mb-3">
          <Text className="font-bold text-lg">Nhà hàng nổi bật</Text>
          <Text className="text-sm text-[#3BC5C9]">Xem thêm...</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <FlatList
            contentContainerStyle={{
              gap: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}
            data={restaurents}
            horizontal
            snapToInterval={CARD_WIDTH_SPACING}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(i) => i.id}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    width: width / 2 - 10 * 2,
                    marginBottom: 10,
                    borderRadius: 10 * 2,
                    overflow: "hidden",
                  }}
                >
                  <BlurView
                    tint="dark"
                    intensity={10}
                    style={{
                      padding: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("ListFood", {
                          item,
                        })
                      }
                      style={{
                        height: 150,
                        width: "100%",
                      }}
                    >
                      <Image
                        src={item?.thumbnail}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 10 * 2,
                        }}
                      />
                      <View
                        style={{
                          position: "absolute",
                          right: 0,
                          borderBottomStartRadius: 10 * 3,
                          borderTopEndRadius: 10 * 2,
                          overflow: "hidden",
                        }}
                      >
                        <BlurView
                          tint="dark"
                          intensity={70}
                          style={{
                            flexDirection: "row",
                            padding: 10 - 2,
                          }}
                        >
                          <Ionicons
                            style={{
                              marginLeft: 10 / 2,
                            }}
                            name="star"
                            color={"yellow"}
                            size={10 * 1.7}
                          />
                          <Text
                            style={{
                              color: "#fff",
                              marginLeft: 10 / 2,
                            }}
                          >
                            4.5
                          </Text>
                        </BlurView>
                      </View>
                    </TouchableOpacity>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "#000",
                        fontWeight: "600",
                        fontSize: 10 * 1.7,
                        marginTop: 10,
                        marginBottom: 10 / 2,
                      }}
                    >
                      {item?.name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ color: "#52555A", fontSize: 10 * 1.2 }}
                    >
                      {item?.address}
                    </Text>
                    <View
                      style={{
                        marginVertical: 10 / 2,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text
                          style={{
                            color: "#000",
                            marginRight: 10 / 2,
                            fontSize: 10 * 1.2,
                          }}
                        >
                          Lượt truy cập
                        </Text>
                        <Text style={{ color: "#000", fontSize: 10 * 1.6 }}>
                          {item?.accessUnit}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("ListFood")}
                        style={{
                          backgroundColor: "red",
                          padding: 10 / 2,
                          borderRadius: 10,
                        }}
                      >
                        <Ionicons name="heart" size={10 * 2} color={"#fff"} />
                      </TouchableOpacity>
                    </View>
                  </BlurView>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10,
  },
  favorite: {
    position: "absolute",
    top: spacing.m,
    right: spacing.m,
    zIndex: 1,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: "hidden",
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: "cover",
  },
  titleBox: {
    position: "absolute",
    top: CARD_HEIGHT - 80,
    left: 16,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: "bold",
    color: colors.white,
  },
  location: {
    fontSize: sizes.h3,
    color: colors.white,
  },
});

export default TopRestaurant;
