import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restauarants/restaurant.screen";
import { Text } from "react-native";

const RestaurantStack = createStackNavigator();

const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>REstaurant Detail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantNavigator;
