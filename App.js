import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useScreens, enableScreens } from "react-native-screens";
import MealsNavigation from "./navigation/MealsNavigation";

// useScreens();
enableScreens();
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": {
      uri: require("./assets/fonts/OpenSans-Regular.ttf"),
      fontDisplay: FontDisplay.FALLBACK,
    },
    "open-sans-bold": {
      uri: require("./assets/fonts/OpenSans-Bold.ttf"),
      fontDisplay: FontDisplay.FALLBACK,
    },
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={setFontLoaded(true)} />
    );
  }
  return <MealsNavigation />;
}
