import { Button } from "@rneui/base";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import WebView from "react-native-webview";
import { styles } from "./exploreVideo.style";
import moment from "moment";
import { useAppSelector } from "../../store/store";

const ExploreVideoScreen = ({ route, navigation }: any) => {
  const { item } = route.params;
  const [requiredVideoItems, setRequiredVideoItems] = useState({});
  const { height, width } = Dimensions.get("window");
  const { loading, paidVideos } = useAppSelector((state) => state.exploreVideo);

  useEffect(() => {
    const reqVideo: any = paidVideos.find(
      (v: any) => v.short_description === item.short_description
    );
    setRequiredVideoItems(reqVideo);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#282C34" }}>
      {item.is_free ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, height: height }}>
            <WebView
              renderLoading={() => (
                <View
                  style={{
                    backgroundColor: "black",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}>
                  <ActivityIndicator color="yellow" size="large" />
                </View>
              )}
              mediaPlaybackRequiresUserAction={true}
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
              <iframe id="video" src="https://embed.vhx.tv/videos/${item.id}?autoplay=1&api=1" width="100%" height=820 frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
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
            </View>
            <Text style={[styles.image_duration_txt, { marginBottom: 50 }]}>
              {item.short_description}
            </Text>
            {requiredVideoItems && (
              <View>
                <Button
                  onPress={() =>
                    navigation.navigate("ExploreWebView", {
                      item: requiredVideoItems,
                    })
                  }
                  style={{ backgroundColor: "pink" }}>
                  Watch Full Video
                </Button>
              </View>
            )}
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
          mediaPlaybackRequiresUserAction={true}
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
