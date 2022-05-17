import React, { useState } from 'react';
import Input from '../components/Input';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <section>
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
    </section>
  )
}

export default Login;