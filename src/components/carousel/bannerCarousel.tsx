import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { Image } from "@rneui/themed";
import { styles } from "./carousel.style";

const BannerCarousel = ({ loading, data, navigation }: any) => {
  const { width, height } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref: React.MutableRefObject<any> = useRef();

  return (
    <View style={{ marginBottom: 5, position: "relative" }}>
      <SwiperFlatList
        autoplay
        style={{ height: height * 0.4, width: width }}
        autoplayDelay={10}
        renderAll={true}
        ref={ref}
        autoplayLoop
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex(Number((x / width).toFixed(0)));
        }}
        keyExtractor={(item) => String(item.id)}
        paginationActiveColor="yellow"
        data={data}
        renderItem={({ item, index }) => {
          return (
            <Animated.View>
              <Pressable
                style={{ flex: 1, justifyContent: "center" }}
                onPress={() =>
                  navigation.navigate("ExploreVideo", {
                    item: item,
                  })
                }>
                <Image
                  transition={true}
                  source={{ uri: item.image.bannerImage }}
                  containerStyle={styles.image}
                  resizeMode="contain"
                  PlaceholderContent={
                    <View style={styles.loader}>
                      <ActivityIndicator color={"yellow"} />
                    </View>
                  }
                />
              </Pressable>
            </Animated.View>
          );
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: width,
        }}>
        {data.map((item: any, index: any) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setCurrentIndex(index);
                ref.current.scrollToIndex({
                  animated: true,
                  index: index,
                });
              }}
              key={item.id}
              style={{
                width: currentIndex === index ? 10 : 8,
                marginLeft: 5,
                height: currentIndex === index ? 10 : 8,
                borderRadius: currentIndex === index ? 5 : 4,
                backgroundColor: currentIndex === index ? "yellow" : "gray",
              }}></TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BannerCarousel;
