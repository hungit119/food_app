import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import FoodDetail from "../screens/FoodDetail";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import Slogan from "../screens/Slogan";
import CheckoutCart from "../screens/CheckoutCart";
import AddFoodCart from "../screens/AddFoodCart";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Slogan"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Slogan" component={Slogan} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
