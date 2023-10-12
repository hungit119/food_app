import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { StatusBar, View } from "react-native";
import Slogan from "../screens/Slogan";
import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import FoodDetail from "../screens/FoodDetail";
import ProfileScreen from "../screens/Layout/v2/ProfileScreen";
import RestaurantManager from "../screens/Layout/v2/RestaurantManager";
import FormRestaurant from "../screens/Layout/v2/FormRestaurant";
import AddFoodCart from "../screens/AddFoodCart";
import CheckoutCart from "../screens/CheckoutCart";
import ListCartFood from "../screens/ListCartFood";
import ListFoodRestaurant from "../screens/Layout/v2/ListFoodRestaurant";
import CreateFoodRestaurant from "../screens/Layout/v2/CreateFoodRestaurant";
import FoodDetailRestaurant from "../screens/Layout/v2/FoodDetailRestaurant";
import ListFood from "../screens/Layout/Restaurant/ListFood";
import DetailFood from "../screens/Layout/Restaurant/DetailFood";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator
        options={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Slogan"
          component={Slogan}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileV2"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RestaurantManager"
          component={RestaurantManager}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FormRestaurant"
          component={FormRestaurant}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddFoodCart"
          component={AddFoodCart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CheckoutCart"
          component={CheckoutCart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ListFoodRestaurant"
          component={ListFoodRestaurant}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateFoodRestaurant"
          component={CreateFoodRestaurant}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ListCartFood"
          component={ListCartFood}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FoodDetailRestaurant"
          component={FoodDetailRestaurant}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ListFood"
          component={ListFood}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailFood"
          component={DetailFood}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
