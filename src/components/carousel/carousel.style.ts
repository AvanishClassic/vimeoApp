import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "white",
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  video_item_label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 8,
  },
  loader: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "black",
  },
  image: {
    // borderWidth: 1,
    justifyContent: "center",
    width: width,
    // borderRadius: 5,

    padding: 20,
    flex: 1,
  },
  img_title_txt: {
    color: "white",
  },
});
