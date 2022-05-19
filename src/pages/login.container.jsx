import React, { useState } from 'react';
import axios from 'axios';
import Login from './login';

function LoginContainer() {
  const [logging, setLogging] = useState(false);
  const [admin, setAdmin] = useState(null);

  const onLogin = ({ password, email }) => {
    setLogging(true);
    // Simula la petición a la API
    axios.post('http://localhost:5001/api/admins/auth/login', {
      password,
      email
    }).then((res) => {
      const adminFetched = res.data;
      setAdmin(adminFetched);
      setLogging(false);
    }).catch((err) => {
      console.error(err);
      setLogging(false);
    })
  }

  console.log(admin);

  return (
    <Login 
      admin={admin}
      loading={logging}
      onLogin={onLogin}
    />
  )
}

export default LoginContainer;