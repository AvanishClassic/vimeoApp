import { Button } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Linking, SafeAreaView } from "react-native";
import { Vimeo } from "react-native-vimeo-iframe";
import WebView from "react-native-webview";
import { styles } from "./exploreVideo.style";
import moment from "moment";
import { useAppSelector } from "../../store/store";

const ExploreVideoScreen = ({ route, navigation }: any) => {
  const { item } = route.params;
  const [requiredVideoItems, setRequiredVideoItems] = useState({});
  const { height, width } = Dimensions.get("window");
  const { loading, paidVideos } = useAppSelector((state) => state.exploreVideo);

  return (
    <View style={{ flex: 1, backgroundColor: "#282C34" }}>
      {item.is_free ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, height: height * 0.4 }}>
            <WebView
              source={{
                html: `
            <html>
            <head>
            <style>
            body {
              background-color: black;
              position:relative;
            }
            </style>
            </head>
            <body>
            <iframe id="video" src="https://embed.vhx.tv/videos/${item.id}?autoplay=1&api=1" width="100%" height="820" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            <script src="https://cdn.vhx.tv/assets/player.js"></script>
            </body>
          </html
            `,
              }}
              startInLoadingState={true}
              javaScriptEnabled={true}
            />
          </View>
          <View style={styles.video_description}>
            <Text style={styles.image_txt}>{item.title}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginBottom: 20,
              }}>
              <Text style={styles.image_duration_txt}>
                {item.duration >= 60
                  ? moment
                      .duration(item.duration, "seconds")
                      .asMinutes()
                      .toFixed(2) + " min"
                  : item.duration + " sec"}
                .
              </Text>
              <Text style={styles.image_duration_txt}>{item.description}</Text>
            </View>
            <View>
              <Button
                onPress={() =>
                  navigation.navigate("ExploreWebView", {
                    item: item,
                  })
                }
                style={{ backgroundColor: "pink" }}>
                Watch Full Video
              </Button>
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <WebView
          source={{
            uri: item.video_page,
            headers: {
              email: "ronnage123@gmail.com",
              password: "Boozee10!",
            },
          }}
          mixedContentMode="compatibility"
          onShouldStartLoadWithRequest={() => true}
          javaScriptEnabled={true}
          onStartShouldSetResponder={() => true}
          startInLoadingState={true}
          incognito={false}
          cacheEnabled={false}
        />
      )}
    </View>
  );
};

export default ExploreVideoScreen;
