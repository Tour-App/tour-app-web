import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '../components/Input';
import Button from '../components/Button';
import Title from '../components/Texts/Title';

const LoginStyled = styled.section`
  &.login { 
    padding: 1rem;

    .login-title {
      text-align: center;
      display: block;
    }
  }
`;

function Login({ className }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <LoginStyled className={`${className} login`}>
      <Title className="login-title">Inicia sesión</Title>
      <Input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingresa tu email" 
      />
      <Input 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        type="password" 
        placeholder="Ingresa tu password"
      />
      <Button filled>Iniciar Sesión</Button>
    </LoginStyled>
  )
}

export default Login;