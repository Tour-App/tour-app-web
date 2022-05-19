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
    .login-password {
      margin-bottom: 2rem;
    }
  }
`;

function Login({ className, loading, onLogin, admin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null)

  const onLoginHandler = () => {
    if (!email || !password) {
      if (!email) {
        setEmailError('No ingresaste tu email');
      }
      if (!password) {
        setPasswordError('No pusiste password');
      }
      return;
    }
    onLogin({ password, email });
  }

  if (admin) {
    return (
      <p>usuario ingresó</p>
    )
  }
  return (
    <LoginStyled className={`${className} login`}>
      <Title className="login-title">Inicia sesión</Title>
      <Input 
        disabled={loading}
        error={emailError}
        value={email} 
        onChange={(e) => {
          if (emailError) {
            setEmailError(null);
          }
          setEmail(e.target.value);
        }}
        placeholder="Ingresa tu email" 
      />
      <Input
        disabled={loading}
        error={passwordError}
        className="login-password"
        value={password} 
        onChange={(e) => {
          if (passwordError) {
            setPasswordError(null);
          }
          setPassword(e.target.value);
        }} 
        type="password" 
        placeholder="Ingresa tu password"
      />
      <Button
        onClick={onLoginHandler} 
        filled 
        loading={loading}
      >
        Iniciar Sesión
      </Button>
    </LoginStyled>
  )
}

export default Login;