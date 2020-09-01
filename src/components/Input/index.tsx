import React from 'react';
import { Image } from 'react-native';

import { Container, Input } from './styles';

interface InputComponentAttributes {
  icon?: any;
  placeholder: string;
}

const InputComponent:React.FC<InputComponentAttributes> = ({ icon, placeholder }) => {
  return (
    <Container>
      {icon && <Image source={icon} />}
      <Input placeholder={placeholder} />
    </Container>
  )
}

export default InputComponent;