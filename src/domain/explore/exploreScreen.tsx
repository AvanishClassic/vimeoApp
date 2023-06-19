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
  const {
    loading,
    paidVideos,
    freeVideos,
    allVideos,
    newReleases,
    politicalStoryTelling,
    viratHits,
    observationalComedy,
  } = useAppSelector(exploreVideoState);
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
            backgroundColor: "black",
          }}>
          {newReleases.length && (
            <CarouselCardItem
              navigation={navigation}
              label="new releases"
              data={newReleases}
            />
          )}
          {viratHits.length && (
            <CarouselCardItem
              navigation={navigation}
              label="viral hits"
              data={viratHits}
            />
          )}
          {observationalComedy.length && (
            <CarouselCardItem
              navigation={navigation}
              label="observational comedy"
              data={observationalComedy}
            />
          )}
          {politicalStoryTelling.length && (
            <CarouselCardItem
              navigation={navigation}
              label="politicalStory telling"
              data={politicalStoryTelling}
            />
          )}
          <CarouselCardItem
            navigation={navigation}
            label="browse all"
            data={paidVideos}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;
