import { convertSecondToMinutes } from "../../common/common";
import { styles } from "../../domain/explore/expore.style";
import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Icon, Image } from "@rneui/themed";

const ExploreCollectionDetail = ({ navigation, route }: any) => {
  const { item, title } = route.params;
  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingLeft: 15,
        paddingVertical: 15,
        backgroundColor: "black",
      }}>
      <FlatList
        data={item}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                // gap: 10,
                // margin: 8,
              }}>
              <TouchableOpacity
                disabled={true}
                style={{
                  // width: width / 2 ,
                  width: width / 2 - 5,
                }}>
                <View style={{ display: "flex" }}>
                  <View style={{ display: "flex" }}>
                    <Image
                      source={{ uri: item?.image.source }}
                      onPressOut={() =>
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
                        styles.imgProp,
                        { height: 100, width: width / 2 - 20 },
                      ]}
                    />
                    <View style={{ marginTop: 5, paddingRight: 5 }}>
                      <Text
                        numberOfLines={1}
                        style={{ color: "white", paddingRight: 10 }}>
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
          );
        }}
      />
    </View>
  );
};

export default ExploreCollectionDetail;
