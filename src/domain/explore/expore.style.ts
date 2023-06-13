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

  list: {
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
  loader: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "black",
  },

  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "white",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
