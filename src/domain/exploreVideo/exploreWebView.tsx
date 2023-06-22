import { View, ActivityIndicator, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import WebView from "react-native-webview";
import { BackHandler } from "react-native";
import { Icon } from "@rneui/base";

const ExploreWebView = ({ navigation, route, isProfile = false }: any) => {
  const webViewRef: any = useRef();

  const handleBack = () => {
    const webView = webViewRef.current;
    webView.goBack();
  };

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
  const onNavigationStateChange = (navState: any) => {
    if (isProfile) {
      if (navState.canGoBack && navState.loading) {
        navigation.setOptions({
          headerLeft: () => (
            <Pressable style={{ padding: 10 }} onPress={handleBack}>
              <Icon size={20} name="arrow-back" type="ionicon" color="white" />
            </Pressable>
          ),
        });
      }
      if (!navState.canGoBack) {
        navigation.setOptions({
          headerLeft: () => null,
        });
      }
    }
  };

  return (
    <WebView
      ref={webViewRef}
      injectedJavaScript={customStyles}
      source={{
        uri: item.video_page,
        headers: {
          email: "ronnage123@gmail.com",
          password: "Boozee10!",
        },
      }}
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
      domStorageEnabled={true}
      setSupportMultipleWindows={true}
      originWhitelist={["*"]}
      // onLoadProgress={({ nativeEvent }) => {
      //   setWebViewcanGoBack(nativeEvent.canGoBack);
      // }}
      mixedContentMode="compatibility"
      onShouldStartLoadWithRequest={() => true}
      javaScriptEnabled={true}
      onStartShouldSetResponder={() => true}
      startInLoadingState={true}
      onNavigationStateChange={onNavigationStateChange}
      incognito={false}
      cacheEnabled={false}
      allowsBackForwardNavigationGestures
    />
  );
};

export default ExploreWebView;
