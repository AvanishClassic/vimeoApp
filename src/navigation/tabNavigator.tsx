import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import ExploreScreen from "../domain/explore/exploreScreen";
import LibraryScreen from "../domain/library/libraryScreen";
import * as React from "react";
import SearchScreen from "../domain/search/search";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#1e1e54",
        },
        headerTintColor: "#fff",
        // headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size={10}
              reverse
              name="ios-american-football"
              type="ionicon"
              color="#517fa4"
            />
          ),
        }}
        name="Explore"
        component={ExploreScreen}
      />
      <Tab.Screen
        name="Search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              size={10}
              reverse
              name="search-outline"
              type="ionicon"
              color="#517fa4"
            />
          ),
        }}
        component={SearchScreen}
        //   options={{ tabBarBadge: books?.length }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size={10}
              reverse
              name="person-circle-outline"
              type="ionicon"
              color="#517fa4"
            />
          ),
        }}
        component={LibraryScreen}
        //   options={{ tabBarBadge: books?.length }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
