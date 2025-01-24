import { useContext, useState } from "react";
import { Colors } from "react-native-paper";
import RestaurantInfoCard from "../../components/restaurant-info-card.component";
import { Platform, FlatList } from "react-native";
import {
  Restaurantcontainer,
  Loading,
  LoadingContainer,
} from "./restaurant.styles";
import Spacer from "../../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../../services/restaurants/restaurant.context";
import Search from "../../components/search/search.component";

const RestaurantsScreen = () => {
  const isAndroid = Platform.OS == "android";
  const [text, setText] = useState("");
  const { restaurants, error, isLoading } = useContext(RestaurantsContext);
  return (
    <Restaurantcontainer>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
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
