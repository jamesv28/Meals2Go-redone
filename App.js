import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native/dist/styled-components.native.cjs";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useManrope,
  Manrope_400Regular,
} from "@expo-google-fonts/manrope";
import { useFonts as useSora, Sora_400Regular } from "@expo-google-fonts/sora";
// npm run ios && --template blank

export default function App() {
  const [manropeLoaded] = useManrope({
    Manrope_400Regular,
  });

  const [soraLoaded] = useSora({
    Sora_400Regular,
  });

  if (!manropeLoaded || !soraLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
}
