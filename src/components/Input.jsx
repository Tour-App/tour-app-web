import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  &.text-input {
    border-radius: 8px;
    border: 3px solid #333333;
    width: 100%;
    padding: 12px 14px;
  }
`;

function Input({ className, value }) {
  return (
    <InputStyled
      className={`${className} text-input`} 
      type="text" 
      value={value}
    />
  )
}

export default Input;
