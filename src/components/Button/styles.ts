import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { flexCenter } from '../../styles/functions';

export const Container = styled(RectButton)`
  ${flexCenter('row')};
  width: 100%;
  height: 56px;
  background: #40C0E7;
  border-radius: 40px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Nunito-Bold';
`;