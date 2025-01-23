import { useContext, useState } from "react";
import { View } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import RestaurantInfoCard from "../../components/restaurant-info-card.component";
import { Platform, FlatList } from "react-native";
import {
  Restaurantcontainer,
  SearchView,
  Loading,
  LoadingContainer,
} from "./restaurant.styles";
import Spacer from "../../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../../services/restaurants/restaurant.context.js";

const RestaurantsScreen = () => {
  const isAndroid = Platform.OS == "android";
  const [text, setText] = useState("");
  const { restaurants, error, isLoading } = useContext(RestaurantsContext);
  console.log("loading", isLoading);
  return (
    <Restaurantcontainer>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={() => setT}
          value={text}
        />
      </SearchView>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer size="large" position="bottom">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </Restaurantcontainer>
  );
};

export default RestaurantsScreen;
