import React, { useState } from 'react';
import Login from './login';

function LoginContainer() {
  const [logging, setLogging] = useState(false);

  const onLogin = () => {
    setLogging(true);
    // Simula la petición a la API
    setTimeout(() => setLogging(false), 3000);
  }

  return (
    <Login 
      loading={logging}
      onLogin={onLogin}
    />
  )
}

export default LoginContainer;