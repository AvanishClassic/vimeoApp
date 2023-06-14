import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  image_txt: {
    marginBottom: 5,
    color: "white",
    fontSize: 24,
  },
  image_duration_txt: {
    color: "gray",

    fontSize: 16,
  },
  video_description: {
    flex: 1,
    padding: 20,
    backgroundColor: "#282C34",
    height: height * 0.6,
  },
});
