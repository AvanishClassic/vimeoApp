import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { Icon, Image } from "@rneui/themed";
import { styles } from "./carousel.style";
import { convertSecondToMinutes, titleCase } from "../../common/common";

const CarouselCardItem = ({ data, index, label, navigation }: any) => {
  const ref: React.MutableRefObject<any> = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: 20,
        paddingVertical: 5,
        marginTop: 10,
      }}>
      <Pressable
        onPressOut={() =>
          navigation.navigate("ExploreCollectionDetail", {
            item: data,
            title: titleCase(label),
          })
        }
        style={styles.video_item_label}>
        <Text style={{ color: "white", fontSize: 16, marginRight: 4 }}>
          {titleCase(label)}
        </Text>
        <View>
          <Icon
            size={16}
            name="chevron-forward"
            type="ionicon"
            color="#517fa4"
          />
        </View>
      </Pressable>
      <FlatList
        ref={ref}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => String(item.id)}
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex(Number((x / width).toFixed(0)));
        }}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <TouchableOpacity
                  disabled={true}
                  style={{
                    // width: width / 2 ,
                    width: width / 2 - 20,
                  }}>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ display: "flex", flexDirection: "column" }}>
                      <Image
                        source={{ uri: item?.image.small }}
                        onPress={() =>
                          navigation.navigate("ExploreWebView", {
                            item: item,
                          })
                        }
                        PlaceholderContent={
                          <View style={styles.loader}>
                            <ActivityIndicator color={"yellow"} />
                          </View>
                        }
                        resizeMode="cover"
                        style={[
                          styles.shadowProp,
                          // { height: 100, width: width / 2 - 20 },
                          { height: 100, width: width / 2 - 40 },
                        ]}
                      />
                      <View style={{ marginTop: 5, paddingRight: 5 }}>
                        <Text numberOfLines={1} style={styles.img_title_txt}>
                          {item.title}
                        </Text>
                        <Text style={{ color: "gray" }}>
                          {convertSecondToMinutes(item.duration) + " min"}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

export default CarouselCardItem;
