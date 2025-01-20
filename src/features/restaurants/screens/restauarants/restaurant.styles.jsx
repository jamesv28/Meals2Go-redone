import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Restaurantcontainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchView = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;
