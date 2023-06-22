import { Pressable } from "react-native";
import ExploreWebView from "../exploreVideo/exploreWebView";
import React, { useEffect, useRef } from "react";
import { Icon } from "@rneui/base";

const HomeScreen = ({ navigation }: any) => {
  return <ExploreWebView navigation={navigation} isProfile={true} />;
};

export default HomeScreen;
