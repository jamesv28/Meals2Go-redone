import { useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../../components/restaurant-info-card.component";
import { Platform, FlatList } from "react-native";
import { Restaurantcontainer, SearchView } from "./restaurant.styles";

const RestaurantsScreen = () => {
  const isAndroid = Platform.OS == "android";
  const [text, setText] = useState("");
  return (
    <Restaurantcontainer>
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={() => setT}
          value={text}
        />
      </SearchView>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </Restaurantcontainer>
  );
};

export default RestaurantsScreen;
