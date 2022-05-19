import React from 'react';
import styled from 'styled-components';
import { BsSearch } from "react-icons/bs";

const InputStyled = styled.div`
  &.text-input-container {
    margin-bottom: 1rem;
    position: relative;
    .text-input {
      border-radius: 8px;
      border: 3px solid '#333333';
      width: 100%;
      padding: 12px 14px;
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

function Searchbar({ 
  className, 
  value, 
  onChange, 
  type,
  placeholder,
}) {
  return (
    <InputStyled className={`${className} text-input-container`}>
      <input
        className='text-input'
        onChange={onChange}
        value={value}
        type={type || 'text'}
        placeholder={placeholder}
      />
      <span className='search-icon'><BsSearch/></span>
    </InputStyled>
  )
}

export default Searchbar;
