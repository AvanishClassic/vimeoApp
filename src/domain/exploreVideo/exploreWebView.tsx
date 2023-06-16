import React, { useEffect } from "react";
import WebView from "react-native-webview";

const ExploreWebView = ({ route, isProfile = false }: any) => {
  const { item } = !isProfile
    ? route?.params
    : { item: { video_page: "https://funny.openbarcomedy.com" } };

  const customStyles = `
  document.getElementsByClassName('footer--site')[0].style.display = 'none';
  document.getElementsByClassName('site-header')[0].style.display = 'none';
  document.getElementsByClassName('footer')[0].style.display = 'none';
  document.getElementsByClassName('signup-container')[0].style.marginTop = 0;
  true;
`;

  return (
    <WebView
      injectedJavaScript={customStyles}
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
