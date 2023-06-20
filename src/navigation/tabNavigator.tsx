import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import ExploreScreen from "../domain/explore/exploreScreen";
import HomeScreen from "../domain/home/homeScreen";
import * as React from "react";
import SearchScreen from "../domain/search/search";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#1B213B", borderTopWidth: 0 },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#1B213B",

          // backgroundColor: "black",
        },
        headerTintColor: "#fff",
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size={20}
              name="home"
              type="ionicon"
              color={focused ? "white" : "gray"}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size={20}
              color={focused ? "white" : "gray"}
              name="apps"
              type="ionicon"
            />
          ),
        }}
        name="Browse"
        component={ExploreScreen}
      />
      <Tab.Screen
        name="Search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              size={20}
              name="search-outline"
              type="ionicon"
              color={focused ? "white" : "gray"}
            />
          ),
        }}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
