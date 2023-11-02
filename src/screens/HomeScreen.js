import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SildeFood from "../screens/components/SildeFood";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";
import axios from "axios";
import Recipes from "../components/recipes";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import OfferCard from "../components/OfferCard";
import Header from "../components/Header";
import ListCartFood from "./ListCartFood";
import ListRestaurant from "./components/Restaurant/ListRestaurant";
import ProductScreen from "./Layout/ProductScreen";
import { useSelector } from "react-redux";
import { baseApiUrl } from "../constants";
import TopRestaurant from "./components/TopRestaurant";
import TopFood from "./components/TopFood";
export default function HomeScreen() {
  const user = useSelector((state) => state.auth.user);
  const orderDetails = useSelector((state) => state.order.orderDetails);
  const order = useSelector((state) => state.order.order);
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  console.log(order);

  const getOrder = async () => {
    // try {
    //   const response = await axios.get(baseApiUrl + '/api/order/')
    // } catch (error) {
    //   throw error;
    // }
  };
  useEffect(() => {
    getCategories();
    getRecipes();
    getOrder();
  }, []);

  const handleChangeCategory = (category) => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log("error: ", err.message);
    }
  };
  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      // console.log('got recipes: ',response.data);
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (err) {
      console.log("error: ", err.message);
    }
  };
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* avatar and bell icon */}
        {/* <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{ height: hp(5), width: hp(5.5) }}
          />
          <BellIcon size={hp(4)} color="gray" />
        </View> */}
        <Header />

        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
            Xin chào, {user.name}!
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="font-semibold text-neutral-600"
            >
              Tận hưởng đồ ăn ngon tại nhà !
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3.8) }}
            className="font-semibold text-neutral-600"
          >
            Chỉ cần <Text className="text-[#3BC5C9]">một cú chạm</Text>
          </Text>
        </View>

        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Tìm kiếm..."
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>
        <SildeFood />
        {/* <OfferCard /> */}
        {/* categories */}
        <View>
          {categories.length > 0 && (
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
            />
          )}
        </View>

        <ListRestaurant />

        {/* recipes */}
        <View>
          {/* <Recipes meals={meals} categories={categories} /> */}
          {/* <ProductScreen /> */}
          <TopRestaurant />
        </View>
        <View>
          {/* <Recipes meals={meals} categories={categories} /> */}
          {/* <ProductScreen /> */}
          <TopFood />
        </View>
        {/* oder*/}
      </ScrollView>
      {orderDetails.length !== 0 && (
        <TouchableOpacity
          className="absolute bottom-7 right-6"
          onPress={() =>
            navigation.navigate("ListCartFood", {
              order_id: order.id,
            })
          }
        >
          <View
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
            <View className=" bg-slate-100 rounded-full w-20 h-20">
              <View className="items-center top-7 ">
                <Icon name="shopping-basket" size={26} color="#3BC5C9" />
              </View>
            </View>
            <View className="bg-[#F0FFFF] rounded-full w-7 h-7 -top-[87px] left-12">
              <Text className="text-center top-1 text-[#3BC5C9] ">
                {orderDetails.length}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
