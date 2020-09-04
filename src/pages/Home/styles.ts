import styled, { css } from 'styled-components/native';

import { flexCenter, colorText } from '../../styles/functions';

interface TextProps {
  imageLeft?: boolean;
}

interface SubmitContainerProps {
  isActive: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  padding: 40px;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
`;

export const SubmitContainer = styled.View<SubmitContainerProps>`
  width: 100%;
  height: 200px;
  padding: 24px 40px;
  position: absolute;
  bottom: 0;
  background-color: #fff;

  ${props => props.isActive && css`
    bottom: -200px;
  `}
`;

export const SubmitContent = styled.View`
  display: flex;
  ${flexCenter('row')}
  justify-content: space-between;
`;

export const UsersQuantity = styled.View`
  ${flexCenter('row')}
`;

export const Text = styled.Text<TextProps>`
  color: ${colorText};

  ${props => props.imageLeft && css`
    margin-left: 4px;
  `}
`;

export const Hr = styled.View`
  width: 100%;
  height: 1px;
  background-color: #818181;
  margin: 24px 0;
`;