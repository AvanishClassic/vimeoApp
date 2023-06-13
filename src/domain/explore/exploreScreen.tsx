import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./expore.style";
import { Icon } from "@rneui/base";

import { exploreVideoState, useAppSelector } from "../../store/store";
import { Button } from "@rneui/themed";
import BannerCarousel from "../../components/carousel/bannerCarousel";
import CarouselCardItem from "../../components/carousel/multiCarousel";

const ExploreScreen = ({ navigation }: any) => {
  const { loading, paidVideos, freeVideos, allVideos } =
    useAppSelector(exploreVideoState);

  const videoCallbacks = {
    timeupdate: (data: any) => console.log("timeupdate: ", data),
    play: (data: any) => console.log("play: ", data),
    pause: (data: any) => console.log("pause: ", data),
    fullscreenchange: (data: any) => console.log("fullscreenchange: ", data),
    ended: (data: any) => console.log("ended: ", data),
    controlschange: (data: any) => console.log("controlschange: ", data),
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={"yellow"} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <BannerCarousel
          data={freeVideos}
          loading={loading}
          navigation={navigation}
        />
        <View
          style={{
            backgroundColor: "#202227",
          }}>
          <CarouselCardItem
            navigation={navigation}
            label="trending now"
            data={paidVideos}
          />
          <CarouselCardItem
            navigation={navigation}
            label="new releases"
            data={paidVideos}
          />
          <CarouselCardItem
            navigation={navigation}
            label="browse all"
            data={allVideos}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;
