import React, { useEffect } from "react";
import WebView from "react-native-webview";

const ExploreWebView = ({ route }: any) => {
  const { item } = route.params;

  return (
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
  );
};

export default ExploreWebView;
