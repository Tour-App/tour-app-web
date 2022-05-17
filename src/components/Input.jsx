import React from 'react';
import styled from 'styled-components';

function Input(props) {
  return (
    <input 
      className={`${props.className} text-input`} 
      type="text" 
      value={props.value}
    />
  )
}

export default styled(Input)`
  &.text-input {
    background-color: ${({ active }) => active ? 'red' : 'white'};
  }
`;
