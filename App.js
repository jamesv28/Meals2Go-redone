import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/features/restaurants/screens/restauarants/restaurant.screen";
import { ThemeProvider } from "styled-components/native/dist/styled-components.native.cjs";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useManrope,
  Manrope_400Regular,
} from "@expo-google-fonts/manrope";
import { useFonts as useSora, Sora_400Regular } from "@expo-google-fonts/sora";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "./src/components/utils/safe-area.component";
import Ionicons from "@expo/vector-icons/Ionicons";
// npm run ios && --template blank
import { restaurantRequest } from "./src/services/restaurants/restaurant.service";
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Maps = () => (
  <SafeArea>
    <Text>Maps</Text>
  </SafeArea>
);

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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "#6e57d2",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Map" component={Maps} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
}
