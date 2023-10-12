import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const DetailFood = () => {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();
  const sizes = [
    {
      id: 1,
      name: "Sữa ngô",
      price: 100000,
    },
    {
      id: 2,
      name: "Sữa dâu",
      price: 100000,
    },
    {
      id: 3,
      name: "Nhân trần",
      price: 100000,
    },
    ,
    {
      id: 4,
      name: "Sữa tươi",
      price: 100000,
    },
    {
      id: 5,
      name: "Sữa quất",
      price: 100000,
    },
    {
      id: 6,
      name: "Nhân đậu",
      price: 100000,
    },
  ];
  const [activeSize, setActiveSize] = useState(null);
  return (
    <>
      <ScrollView>
        <ImageBackground
          source={require("../../../../assets/images/swiper1.jpg")}
          style={{
            height: height / 2 + 10 * 2,
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
            onPress={() => navigation.navigate('HomeScreen')}
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
                  Thịt bò xào xả ớt
                </Text>
                <Text
                  style={{
                    fontSize: 10 * 1.8,
                    color: "#b5b5b5",
                    fontWeight: "500",
                    marginBottom: 10,
                  }}
                >
                  55 Giải Phóng
                </Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Ionicons name="star" size={10 * 1.5} color="yellow" />
                  <Text
                    style={{
                      color: "#fff",
                      marginLeft: 10,
                    }}
                  >
                    4.5
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
        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "#b5b5b5",
              fontSize: 10 * 1.7,
              marginBottom: 10,
            }}
          >
            Mô tả
          </Text>
          <Text numberOfLines={3} style={{ color: "#000" }}>
            Một món ăn ngon và quen thuộc mà bạn có thể thưởng thức là món "Cơm
            rang gà xào ớt". Đây là một món ăn ngon và phổ biến trong nhiều nền
            ẩm thực trên khắp thế giới, nhưng chúng ta sẽ tập trung vào phiên
            bản của nó trong ẩm thực Á Đông.
          </Text>
          <View
            style={{
              marginVertical: 10 * 2,
            }}
          >
            <Text
              style={{
                color: "#b5b5b5",
                fontSize: 10 * 1.7,
                marginBottom: 10,
              }}
            >
              Món ăn thêm
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              {sizes.map((size, index) => (
                <TouchableOpacity
                  key={size.id}
                  onPress={() => setActiveSize(size.id)}
                  style={[
                    {
                      borderWidth: 2,
                      paddingVertical: 10 / 2,
                      borderRadius: 10,
                      backgroundColor: "#fff",
                      width: width / 3 - 10 * 2,
                      alignItems: "center",
                      borderColor: "#3BC5C9",
                    },
                    activeSize == size && {
                      borderColor: "#3BC5C9",
                      backgroundColor: "#3BC5C9",
                    },
                  ]}
                >
                  <Text
                    style={[
                      {
                        color: "#3BC5C9",
                        fontSize: 10 * 1.9,
                      },
                      activeSize === size && {
                        color: "#fff",
                      },
                    ]}
                  >
                    {size.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <View
          style={{
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 10 * 3,
          }}
        >
          <Text style={{ color: "#000", fontSize: 10 * 1.5 }}>Giá tiền</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#3BC5C9", fontSize: 10 * 2 }}>100.000</Text>
            <Text
              style={{
                color: "#000",
                fontSize: 10 * 2,
                marginLeft: 10 / 2,
              }}
            >
              VNĐ
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginRight: 10,
            backgroundColor: "#3BC5C9",
            width: width / 2 + 10 * 3,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10 * 2,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("FoodDetail")}>
            <Text
              style={{
                color: "#fff",
                fontSize: 10 * 2,
                fontWeight: "700",
              }}
            >
              Thêm món ăn
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default DetailFood;
