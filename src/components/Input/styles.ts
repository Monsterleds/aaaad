import styled from 'styled-components/native';

import { flexCenter } from '../../styles/functions';

export const Container = styled.View`
  ${flexCenter('row')};
  width: 100%;
  background-color: #fff;
  border-radius: 40px;
  padding: 0 21px;
  elevation: 2;
`;

export const Input = styled.TextInput.attrs(({
  placeholderTextColor: '#BFBFBF'
}))`
  flex: 1;
  height: 56px;
  font-size: 14px;
  margin-left: 8px;
`;