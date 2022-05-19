import React from 'react';
import styled from 'styled-components';
import { BsSearch } from "react-icons/bs";

const InputStyled = styled.div`
  &.text-input-container {
    margin-bottom: 1rem;
    position: ${({ hasIcon }) => hasIcon ? 'relative' : 'unset'};
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
    .padding-inline-input {
      padding-inline-start: 32px;
    }
    .search-icon {
      position: absolute;
      top: 0.9rem;
      margin-left: 10px;
      display: block;
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
  disabled,
  hasIcon
}) {
  return (
    <InputStyled error={error} hasIcon={hasIcon} className={`${className} text-input-container`}>
      <input
        className={`text-input ${hasIcon ? 'padding-inline-input': ''}`}
        onChange={onChange}
        value={value}
        type={type || 'text'}
        placeholder={placeholder}
        disabled={disabled}
      />
      {hasIcon && <span className='search-icon'><BsSearch/></span>}
      {error && <p className='text-input-error'>{error}</p>}
    </InputStyled>
  )
}

export default Input;
