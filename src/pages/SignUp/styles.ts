import styled, { css } from 'styled-components/native';

import { flexCenter, colorText } from '../../styles/functions';

interface InputTextProps {
  lastChild?: boolean;
  secondChild?: boolean;
}

export const Container = styled.View`
  ${flexCenter('column')};
  flex: 1;
  padding: 40px;
`;

export const FormContent = styled.View`

`;

export const InputView = styled.View<InputTextProps>`
  margin-top: 64px;

  ${props => props.secondChild && css`
    margin-top: 16px;
  `}

  ${props => props.lastChild && css`
    margin-top: 16px;
    margin-bottom: 40px;
  `}
`;

export const InputText = styled.Text`
  font-family: 'Nunito-Bold';
  color: ${colorText};
`;

export const ForgotPasswordText = styled.Text`
  align-self: flex-end;
  color: ${colorText};
`;