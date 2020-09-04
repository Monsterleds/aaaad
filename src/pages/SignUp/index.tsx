import React from 'react';
import { Image, Text } from 'react-native';
import { Form } from '@unform/mobile';

import Logo from '../../../assets/images/Logo.png';
import Lock from '../../../assets/images/icons/Lock.png';
import Email from '../../../assets/images/icons/Email.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  FormContent,
  InputView,
  InputText,
  ForgotPasswordText,
 } from './styles';

const SignIn:React.FC = () => {
  const handleOnSubmit = () => {
    console.log('odpkawpodaw');
  }

  return (
    <Container>
      <Image source={Logo} />
      <Form onSubmit={handleOnSubmit} style={{ width: '100%' }}>
        <FormContent>
          <InputView>
            <InputText>E-mail</InputText>
            <Input icon={Email} placeholder="johndoe@umberlla.com" />
          </InputView>
          <InputView secondChild={true}>
            <InputText>Senha</InputText>
            <Input icon={Lock} placeholder="••••••••••••" />
          </InputView>
          <InputView lastChild={true}>
            <InputText>Confirmar Senha</InputText>
            <Input icon={Lock} placeholder="••••••••••••" />
          </InputView>
          <Button>Cadastrar</Button>
        </FormContent>
      </Form>
    </Container>
  )
}

export default SignIn;