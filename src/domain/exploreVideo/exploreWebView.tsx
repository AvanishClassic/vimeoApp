import React, { useEffect } from "react";
import WebView from "react-native-webview";

const ExploreWebView = ({ route }: any) => {
  const { item } = route.params;
  const customStyles = `
  document.getElementsByClassName('mobile-header')[0].style.display = 'none';
  document.getElementsByClassName('signup-banner')[0].style.display = 'none';
  document.getElementsByClassName('footer')[0].style.display = 'none';
  document.getElementsByClassName('signup-container')[0].style.marginTop = 0;
  true; // note: this is required, or you'll sometimes get silent failures
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
