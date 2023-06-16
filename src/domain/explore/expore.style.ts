import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    padingHorizontal: 20,
    alignItems: "center",
    height: "100%",
    flex: 1,
    backgroundColor: "black",

    // backgroundColor: "#202227",
  },

  // list: {
  //   width: "100%",
  //   paddingHorizontal: 20,
  //   backgroundColor: "black",
  // },
  loader: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "black",
  },

  imgProp: {
    borderRadius: 10,
    shadowOpacity: 10,
    borderWidth: 1,
    borderColor: "#282828",
    shadowRadius: 10,
  },
});
