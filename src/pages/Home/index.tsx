import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import User from '../../../assets/images/icons/User.png';
import Lupa from '../../../assets/images/icons/Lupa.png';
import Background from '../../../assets/images/Backgrounds.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Content,
  BackgroundImage,
  SubmitContainer,
  SubmitContent,
  Text,
  UsersQuantity,
  Hr,
} from './styles';

const Home:React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  const navigation = useNavigation();

  return (
    <Container>
      <BackgroundImage source={Background} />
      <Content>
        <Input icon={Lupa} placeholder="Para onde deseja ir?" />
      </Content>
        <SubmitContainer isActive={isActive}>
          <SubmitContent>
            <UsersQuantity>
              <RectButton onPress={() => setIsActive(true)}>
                <Image source={User} />
              </RectButton>
              <Text imageLeft={true}>
                3
              </Text>
            </UsersQuantity>
            <Text>
              R$ 16,69
            </Text>
        </SubmitContent>
        <Hr />
        <Button onPress={() => setIsActive(false)}>
          Confirmar
        </Button>
      </SubmitContainer>
    </Container>
  )
}

export default Home;