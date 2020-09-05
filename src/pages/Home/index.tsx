import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import User from '../../../assets/images/icons/User.png';
import Lupa from '../../../assets/images/icons/Lupa.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Content,
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
      <MapView provider={PROVIDER_GOOGLE} style={{ height: 200, width: 200 }} />
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