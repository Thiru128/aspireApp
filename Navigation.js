/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  CreditCardScreen,
  DebitCardScreen,
  HomeScreen,
  ProfileScreen,
  SpendingLimitScreen,
} from "./src/screens";
import { TabBarComponent } from "./src/components";
import { colors } from "./src/constants";

const Tab = createBottomTabNavigator();

const DebitStack = createStackNavigator();

function DebitScreen() {
  return (
    <DebitStack.Navigator screenOptions={{ headerShown: false }}>
      <DebitStack.Screen name="Debit" component={DebitCardScreen} />
      <DebitStack.Screen name="SpendingLimit" component={SpendingLimitScreen} />
    </DebitStack.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.appGreen,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarComponent
                focused={focused}
                color={color}
                size={size}
                image={require("./src/assets/home.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Debit"
          component={DebitScreen}
          listeners={({ navigation, route }) => ({
            tabPress: () => navigation.navigate(route.name),
          })}
          options={{
            tabBarLabel: "Debit",
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarComponent
                focused={focused}
                color={color}
                size={size}
                image={require("./src/assets/pay.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Credit"
          component={CreditCardScreen}
          options={{
            tabBarLabel: "Credit",
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarComponent
                focused={focused}
                color={color}
                size={size}
                image={require("./src/assets/credit.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarComponent
                focused={focused}
                color={color}
                size={size}
                image={require("./src/assets/user.png")}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
