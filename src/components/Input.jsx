import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  &.text-input {
    border-radius: 8px;
    border: 3px solid #333333;
    width: 100%;
    padding: 12px 14px;
    margin-bottom: 16px;
  }
`;

function Input({ 
  className, 
  value, 
  onChange, 
  type,
  placeholder
}) {
  return (
    <InputStyled
      className={`${className} text-input`} 
      onChange={onChange}
      value={value}
      type={type || 'text'}
      placeholder={placeholder}
    />
  )
}

export default Input;
