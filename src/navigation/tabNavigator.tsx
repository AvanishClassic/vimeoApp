import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import ExploreScreen from "../domain/explore/exploreScreen";
import LibraryScreen from "../domain/library/libraryScreen";
import * as React from "react";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
        name="ExploreScreen"
        component={ExploreScreen}
      />
      <Tab.Screen
        name="Library"
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
