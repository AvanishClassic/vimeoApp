import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Provider } from "react-redux";
import { Button, lightColors, createTheme, ThemeProvider } from "@rneui/themed";
import { theme } from "./src/utils/theme";
import AppNavigation from "./src/navigation/appNavigation";
import { store } from "./src/store/store";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    <StatusBar style="light" />;
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </Provider>
  );
}
