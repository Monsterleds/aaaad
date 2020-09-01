import styled from 'styled-components/native';

import { flexCenter } from '../../styles/functions';

export const Container = styled.TouchableOpacity`
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