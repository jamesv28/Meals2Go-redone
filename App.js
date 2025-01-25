import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native/dist/styled-components.native.cjs";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useManrope,
  Manrope_400Regular,
} from "@expo-google-fonts/manrope";
import { useFonts as useSora, Sora_400Regular } from "@expo-google-fonts/sora";
import Navigator from "./src/infrastructure/navigation";
// npm run ios && --template blank
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";

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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
}
