import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Icon } from "@rneui/themed";

import { View } from "react-native";
import ExploreScreen from "../domain/explore/exploreScreen";
import LibraryScreen from "../domain/library/libraryScreen";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { ScreenContainer } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
import ExploreVideoScreen from "../domain/exploreVideo/exploreVideoScreen";
import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { getVideos } from "../domain/explore/exploreVideoReducer";
import ExploreWebView from "../domain/exploreVideo/exploreWebView";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Explore"
          component={TabNavigator}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen name="ExploreVideo" component={ExploreVideoScreen} />
        <Stack.Screen name="ExploreWebView" component={ExploreWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

type RootStackParamList = {
  Explore: undefined;
  Library: undefined;
};

export type Props<T extends keyof RootStackParamList> = BottomTabScreenProps<
  RootStackParamList,
  T
>;

export default AppNavigation;
