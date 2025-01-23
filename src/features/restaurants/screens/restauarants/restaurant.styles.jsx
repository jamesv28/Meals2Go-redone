import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

export const Restaurantcontainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchView = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
