import { styles } from "../../domain/explore/expore.style";
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

const Carousel = ({ loading, data, navigation }: any) => {
  const { width, height } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref: React.MutableRefObject<any> = useRef();

  return (
    <>
      <SwiperFlatList
        autoplay
        style={{ height: height * 0.3 }}
        autoplayDelay={10}
        ref={ref}
        autoplayLoop
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex(Number((x / width).toFixed(0)));
        }}
        renderAll={true}
        keyExtractor={(item) => String(item.id)}
        // showPagination
        // paginationStyleItem={{ width: 10, height: 10 }}
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
                  source={{ uri: item.image }}
                  containerStyle={styles.image}
                  resizeMode="contain"
                  PlaceholderContent={
                    <View
                      style={{
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        backgroundColor: "black",
                      }}>
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
    </>
  );
};

export default Carousel;
