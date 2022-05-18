import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.div`
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

function Input({ 
  className, 
  value, 
  onChange, 
  type,
  placeholder,
  error,
  disabled
}) {
  return (
    <InputStyled error={error} className={`${className} text-input-container`}>
      <input
        className='text-input'
        onChange={onChange}
        value={value}
        type={type || 'text'}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <p className='text-input-error'>{error}</p>}
    </InputStyled>
  )
}

export default Input;
