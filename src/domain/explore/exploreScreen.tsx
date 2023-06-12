import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Pressable,
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./expore.style";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { Image } from "@rneui/themed";
import { useAppSelector } from "../../store/store";
import { Button } from "@rneui/themed";
import Carousel from "../../components/carousel/carousel";

const ExploreScreen = ({ navigation }: any) => {
  const { loading, paidVideos, freeVideos } = useAppSelector(
    (state) => state.exploreVideo
  );

  const { width, height } = Dimensions.get("window");

  const videoCallbacks = {
    timeupdate: (data: any) => console.log("timeupdate: ", data),
    play: (data: any) => console.log("play: ", data),
    pause: (data: any) => console.log("pause: ", data),
    fullscreenchange: (data: any) => console.log("fullscreenchange: ", data),
    ended: (data: any) => console.log("ended: ", data),
    controlschange: (data: any) => console.log("controlschange: ", data),
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginBottom: 5 }}>
          <Carousel
            data={freeVideos}
            loading={loading}
            navigation={navigation}
          />
        </View>
        <View style={{ flex: 1, marginTop: 5 }}>
          <FlatList
            // numColumns={2}
            horizontal
            pagingEnabled={true}
            style={{}}
            keyExtractor={(item) => String(item.id)}
            data={paidVideos}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: width / 3,
                    // height: height / 8,
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <View>
                    <Pressable
                      style={{ flex: 1 }}
                      // onPressIn={() =>
                      //   navigation.navigate("ExploreVideo", {
                      //     item: item,
                      //   })
                      // }
                    >
                      <Image
                        source={{ uri: item.image }}
                        containerStyle={styles.image}
                        resizeMode="contain"
                        PlaceholderContent={<ActivityIndicator />}
                      />
                    </Pressable>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;
