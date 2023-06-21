import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Icon } from "@rneui/themed";

import { View } from "react-native";
import ExploreScreen from "../domain/explore/exploreScreen";
import LibraryScreen from "../domain/home/homeScreen";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { ScreenContainer } from "react-native-screens";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
import ExploreVideoScreen from "../domain/exploreVideo/exploreVideoScreen";
import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { getVideos } from "../domain/explore/exploreVideoReducer";
import ExploreWebView from "../domain/exploreVideo/exploreWebView";
import ExploreCollectionDetail from "../domain/exploreCollectionDetail/exploreCollectionDetail";
import * as SplashScreen from 'expo-splash-screen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVideos());
    SplashScreen.hideAsync()
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerBackTitleVisible: false,
          headerTintColor: "black",
        }}>
        <Stack.Screen
          name="ExploreScreen"
          component={TabNavigator}
          options={{
            headerShown: false,
            headerTitleAlign: "center",

            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          options={{
            title: "",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1B213B",
            },
            headerTintColor: "#fff",
          }}
          name="ExploreVideo"
          component={ExploreVideoScreen}
        />
        <Stack.Screen
          options={{
            title: "",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1B213B",
            },
            headerTintColor: "#fff",
          }}
          name="ExploreWebView"
          component={ExploreWebView}
        />
        <Stack.Screen
          options={{
            title: "",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1B213B",
            },
            headerTintColor: "#fff",
          }}
          name="ExploreCollectionDetail"
          component={ExploreCollectionDetail}
        />
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
