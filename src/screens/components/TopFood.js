import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import { baseApiUrl } from "../../constants";

const TopFood = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [foods, setAllFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();

  const fetchfoods = async () => {
    try {
      const response = await axios.get(baseApiUrl + "/api/food");
      if (response.data.success) {
        setIsLoading(false);
        setAllFoods(response.data.data.data);
      }
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchfoods();
  }, []);

  const showFood = foods.slice(0, 4);
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: 10,
          display: "flex",
        }}
      >
        <View className="flex flex-row justify-between items-center mb-3">
          <Text className="font-bold text-lg">Món ăn nổi bật</Text>
          <Text className="text-sm text-[#3BC5C9]">Xem thêm...</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {showFood.map((restaurent) => (
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
                      restaurent,
                    })
                  }
                  style={{
                    height: 150,
                    width: "100%",
                  }}
                >
                  <Image
                    src={restaurent?.thumbnail}
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
                    color: "#3BC5C9",
                    fontWeight: "600",
                    fontSize: 10 * 1.7,
                    marginTop: 10,
                    marginBottom: 10 / 2,
                  }}
                >
                  {restaurent?.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ color: "#52555A", fontSize: 10 * 1.2 }}
                >
                  {restaurent?.address}
                </Text>
                <View
                  style={{
                    marginVertical: 10 / 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: "#000",
                        marginRight: 10 / 2,
                        fontSize: 10 * 1.2,
                      }}
                    >
                      Lượt truy cập
                    </Text>
                    <Text style={{ color: "#3BC5C9", fontSize: 10 * 1.6 }}>
                      {restaurent?.accessUnit}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ListFood")}
                    style={{
                      backgroundColor: "#3BC5C9",
                      padding: 10 / 2,
                      borderRadius: 10,
                    }}
                  >
                    <Ionicons name="heart" size={10 * 2} color={"#fff"} />
                  </TouchableOpacity>
                </View>
              </BlurView>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TopFood;

const styles = StyleSheet.create({});
