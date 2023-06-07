import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Provider } from "react-redux";
import { Button, lightColors, createTheme, ThemeProvider } from "@rneui/themed";
import { theme } from "./src/utils/theme";
import AppNavigation from "./src/navigation/appNavigation";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </Provider>
  );
}
