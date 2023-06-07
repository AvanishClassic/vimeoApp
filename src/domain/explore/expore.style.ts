import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padingHorizontal: 20,
    alignItems: "center",
    paddingVertical: 10,
    height: "100%",
    flex: 1,
    backgroundColor: "black",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
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
  text: {
    fontSize: 42,
    color: "black",
  },
  FlatListStyle: {
    marginTop: 20,
  },
  switchContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  buttonContainer: {
    margin: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    width: 100,
    elevation: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});
