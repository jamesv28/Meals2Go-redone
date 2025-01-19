import { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";

const Restaurantcontainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.brand.primary}
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

const BodyView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.sizes[1]};
`;

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
      <BodyView>
        <RestaurantInfoCard />
      </BodyView>
    </Restaurantcontainer>
  );
};

export default RestaurantsScreen;
