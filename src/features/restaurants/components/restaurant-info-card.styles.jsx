import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  height: 15px;
  width: 15px;
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  justify-content: space-between;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const InfoCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantImage = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
