import { Button } from "@rneui/base";
import React, { useEffect } from "react";
import { View, Text, Dimensions, Linking } from "react-native";
import { Vimeo } from "react-native-vimeo-iframe";
import WebView from "react-native-webview";

const ExploreVideoScreen = ({ route, navigation }: any) => {
  const { item } = route.params;
  const { height, width } = Dimensions.get("window");

  useEffect(() => {
    // if (!item.is_free) {
    //   Linking.openURL(item.video_page);
    //   navigation.navigate("Explore");
    // }
    console.log(item);
  }, [item]);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {item.is_free ? (
        <View style={{ flex: 1 }}>
          <WebView
            source={{
              html: `
            <html>
            <head>
            <style>
            body {background-color: black}
            </style>
            </head>
            <body>
            <iframe id="video" src="https://embed.vhx.tv/videos/${item.id}?autoplay=1&api=1" width="100%" height="480" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            <script src="https://cdn.vhx.tv/assets/player.js"></script>
            </body>
          </html
            `,
            }}
            startInLoadingState={true}
            javaScriptEnabled={true}
          />
        </View>
      ) : (
        <WebView
          source={{
            uri: "https://funny.openbarcomedy.com/videos/daryl-felsberg-i-won-t-stand-for-it",
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
