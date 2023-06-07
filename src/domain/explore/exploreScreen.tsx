import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  VirtualizedList,
  ListRenderItemInfo,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { WebView } from "react-native-webview";
import { styles } from "./expore.style";
import { Image } from "@rneui/themed";
import { getAllVideos } from "./expore.service";
import { Vimeo } from "react-native-vimeo-iframe";
import { Props } from "navigation/appNavigation";
import CarouselCardItem, {
  SLIDER_WIDTH,
} from "../../components/carousel/carouselCardItem";
import Carousel from "react-native-snap-carousel";

const ExploreScreen = ({ navigation }: any) => {
  const [vimeoVideo, setVimeoVideo] = useState([]);
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const videoCallbacks = {
    timeupdate: (data: any) => console.log("timeupdate: ", data),
    play: (data: any) => console.log("play: ", data),
    pause: (data: any) => console.log("pause: ", data),
    fullscreenchange: (data: any) => console.log("fullscreenchange: ", data),
    ended: (data: any) => console.log("ended: ", data),
    controlschange: (data: any) => console.log("controlschange: ", data),
  };

  useEffect(() => {
    renderAllVideos();
  }, []);

  const renderAllVideos = async () => {
    let res = await getAllVideos();
    res = res.map((item: any) => ({
      id: item.id,
      title: item.title,
      is_free: item.is_free,
      image: item.thumbnail.medium,
      video_page: item?._links.video_page?.href,
    }));
    setVimeoVideo(res);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {/* <Carousel
            layout="tinder"
            layoutCardOffset={9}
            ref={isCarousel}
            data={vimeoVideo}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={SLIDER_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
            onSnapToItem={(index) => setIndex(index)}
          /> */}
          <FlatList
            numColumns={2}
            style={styles.list}
            keyExtractor={(item) => String(item.id)}
            data={vimeoVideo}
            renderItem={(data: ListRenderItemInfo<any>) => {
              return (
                <>
                  <View
                    style={{
                      width: "50%",
                      height: 100,
                      margin: 5,
                    }}>
                    <Pressable
                      style={{ flex: 1 }}
                      onPressIn={() =>
                        navigation.navigate("ExploreVideo", {
                          item: data.item,
                        })
                      }>
                      <Image
                        source={{ uri: data.item.image }}
                        containerStyle={styles.image}
                        PlaceholderContent={<ActivityIndicator />}
                      />
                    </Pressable>
                  </View>
                </>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ExploreScreen;
