import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { baseApiUrl } from "../../../constants";
import { useSelector } from "react-redux";

const ListFood = ({ route }) => {
  const { restaurent } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [foods, setfoods] = useState([]);
  const { height, width } = Dimensions.get("window");
  const [activeSize, setActiveSize] = useState(null);

  const order = useSelector((state) => state.order.order);
  const orderDetails = useSelector((state) => state.order.orderDetails);
  const totalMount = useSelector((state) => state.order.totalMount);

  const navigation = useNavigation();

  const fetchListFoodsByRestaurentId = async () => {
    try {
      const response = await axios.post(
        baseApiUrl + "/api/food/get-by-res-id",
        {
          restaurent_id: restaurent.id,
        }
      );
      if (response.data.success) {
        setIsLoading(false);
        setfoods(response.data.data);
      }
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchListFoodsByRestaurentId();
  }, []);

  return (
    <>
      <ScrollView className="h-[280px]">
        <ImageBackground
          src={restaurent.thumbnail}
          style={{
            height: 500 / 2 + 10 * 2,
            justifyContent: "space-between",
          }}
          imageStyle={{
            borderRadius: 10 * 3,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10 * 2,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                padding: 10,
                borderRadius: 10 * 1.5,
              }}
            >
              <Ionicons name="arrow-back" color="#4D4F52" size={10 * 2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                padding: 10,
                borderRadius: 10 * 1.5,
              }}
            >
              <Ionicons name="heart" color="#fff" size={10 * 2} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderRadius: 10 * 3,
              overflow: "hidden",
            }}
          >
            <BlurView
              intensity={80}
              tint="dark"
              style={{
                padding: 10 * 2,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 10 * 2,
                    color: "#fff",
                    fontWeight: "600",
                    marginBottom: 10,
                  }}
                >
                  {restaurent.name}
                </Text>
                <Text
                  style={{
                    fontSize: 10 * 1.8,
                    color: "#b5b5b5",
                    fontWeight: "500",
                    marginBottom: 10,
                  }}
                >
                  {restaurent.address}
                </Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Ionicons name="star" size={10 * 1.5} color="yellow" />
                  <Text
                    style={{
                      color: "#fff",
                      marginLeft: 10,
                    }}
                  >
                    {restaurent?.rating}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "35%",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      padding: 10 / 2,
                      width: 10 * 6,
                      height: 10 * 5,
                      backgroundColor: "#0C0F14",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="restaurant" size={10 * 2} color="#D17842" />
                    <Text
                      style={{
                        color: "#b5b5b5",
                        fontSize: 10,
                      }}
                    >
                      Nhà hàng
                    </Text>
                  </View>
                  <View
                    style={{
                      padding: 10 / 2,
                      width: 10 * 6,
                      height: 10 * 5,
                      backgroundColor: "#0C0F14",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="location" size={10 * 2} color="#D17842" />
                    <Text
                      style={{
                        color: "#b5b5b5",
                        fontSize: 10,
                      }}
                    >
                      Địa điểm
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#0C0F14",
                    padding: 10 / 2,
                    borderRadius: 10 / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#b5b5b5",
                      fontSize: 10 * 1.3,
                    }}
                  >
                    Đồ ăn
                  </Text>
                </View>
              </View>
            </BlurView>
          </View>
        </ImageBackground>
      </ScrollView>
      <View>
        <Text className="text-xl m-2">Danh sách món ăn của nhà hàng</Text>
      </View>
      <ScrollView>
        <View
          style={{
            padding: 10,
            flex: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 15,
            }}
          >
            {foods.length === 0 ? (
              <View>
                <Text className="text-xl">Không có món ăn nào</Text>
              </View>
            ) : (
              foods.map((food) => (
                <View
                  key={food?.id}
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
                        navigation.navigate("FoodDetail", {
                          food,
                        })
                      }
                      style={{
                        height: 150,
                        width: "100%",
                      }}
                    >
                      <Image
                        src={food?.thumbnail}
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
                            {food?.calory}
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
                      {food?.title}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ color: "#52555A", fontSize: 10 * 1.2 }}
                    >
                      Lượt bán: {food?.unit}
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
                            fontSize: 15 * 1.2,
                          }}
                        >
                          {food?.prize}
                        </Text>
                        <Text
                          style={{
                            color: "#000",
                            fontWeight: 500,
                            fontSize: 10 * 1.6,
                          }}
                        >
                          VNĐ
                        </Text>
                      </View>
                      <TouchableOpacity
                        // onPress={() => navigation.navigate("DetailFood")}
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
              ))
            )}
          </View>
        </View>
      </ScrollView>
      {orderDetails.length !== 0 && (
        <TouchableHighlight onPress={() => navigation.navigate('ListCartFood')}>
          <View
            className="absolute bottom-0 right-0 left-0"
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}
          >
            <View className=" bg-slate-100 rounded-2xl h-30 px-8 py-4 flex-row justify-between items-center">
              <TouchableOpacity className="border-2 border-sky-300 rounded-xl w-20 flex items-center" onPress={() => navigation.navigate('ListCartFood',{order_id:order.id})}>
                <View className="p-4">
                  <Icon name="shopping-basket" size={22} color="#3BC5C9" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#3BC5C9] rounded-lg" onPress={() => navigation.navigate('CheckoutCart')}>
                <View className="p-4">
                  <Text className="text-base text-white"> {totalMount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableHighlight>
      )}
    </>
  );
};

export default ListFood;
