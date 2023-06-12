import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    padingHorizontal: 20,
    alignItems: "center",
    height: "100%",
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    borderWidth: 1,
    height: 100,
    justifyContent: "center",
    width: width,
    // borderRadius: 5,
    padding: 20,
    resizeMode: "cover",
    flex: 1,
  },
  list: {
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
  scrollView: {
    backgroundColor: "pink",
    padding: 20,
    marginHorizontal: 20,
  },

  FlatListStyle: {
    marginTop: 20,
  },
});
