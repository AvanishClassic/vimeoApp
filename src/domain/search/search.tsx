import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Pressable,
  SectionList,
} from "react-native";

import { Avatar, Image, ListItem, SearchBar } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { exploreVideoState, useAppSelector } from "../../store/store";
import moment from "moment";

const Search = ({ navigation }: any) => {
  const [searchedVideo, setSearchedVideo] = useState("");
  const { loading, paidVideos } = useAppSelector(exploreVideoState);
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        containerStyle={{ backgroundColor: "#1B213B", borderBottomWidth: 0 }}
        inputContainerStyle={{ backgroundColor: "#1B213B" }}
        placeholder="Search Comedians Name..."
        lightTheme={false}
        round
        value={searchedVideo}
        onChangeText={(text) => setSearchedVideo(text)}
        autoCorrect={false}
      />
      {searchedVideo ? (
        <FlatList
          data={paidVideos.filter((videos: any) =>
            videos.name.includes(searchedVideo)
          )}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() =>
                navigation.navigate("ExploreVideo", {
                  item: item,
                })
              }
              style={{ justifyContent: "center", alignItems: "center" }}>
              <ListItem
                containerStyle={{
                  backgroundColor: "#202227",
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  alignItems: "flex-start",
                  width: width - 20,
                }}>
                <Avatar
                  containerStyle={{ width: 110, height: 70 }}
                  source={{ uri: item.image.small }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{ color: "white" }}>
                    {item.title}
                  </ListItem.Title>
                  <ListItem.Subtitle style={{ color: "white" }}>
                    {item.duration >= 60
                      ? moment
                          .duration(item.duration, "seconds")
                          .asMinutes()
                          .toFixed(2) + " min"
                      : item.duration + " sec"}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </Pressable>
          )}
        />
      ) : (
        // </View>
        <View style={styles.content}>
          <Text style={styles.text}>Search for Video</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202227",
    padding: 2,
  },
  content: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
