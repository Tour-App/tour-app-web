import React, { useState } from 'react';
import styled from 'styled-components';

const DateStyled = styled.div`
  &.text-input-container {
    margin-bottom: 1rem;
    .text-input {
      border-radius: 8px;
      border: 3px solid ${({ error }) => error ? 'red' : '#333333'};
      width: 100%;
      padding: 12px 14px;
    }
    .text-input-error {
      font-size: 12px;
      color: red;
      margin: 0;
    }
  }
  
  `;

function Date({ 
  className, 
  value, 
  min,
  max,
  onChange,
  placeholder,
  error,
  disabled
}) {
  const [valor, setValor] = useState('');
  return (
    <DateStyled error={error} className={`${className} text-input-container`}>
      <input
        className='text-input'
        value={valor}
        min={min}
        max={max}
        type='date'
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          setValor(e.target.value);
        }}
      />
      {error && <p className='text-input-error'>{error}</p>}
    </DateStyled>
  )
}

export default Date;