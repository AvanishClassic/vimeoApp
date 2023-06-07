import { styles } from "../../domain/explore/expore.style";
import React from "react";
import { View, Image, Text, Dimensions } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;

const CarouselCardItem = ({ item, index }: any) => {
  return (
    <View key={index}>
      <Image
        source={{ uri: item.image }}
        //   style={styles.image}
      />
      <Text>{item.title}</Text>
    </View>
  );
};

export default CarouselCardItem;
