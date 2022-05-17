import styled from 'styled-components';

const ButtonStyled = styled.button`
  &.button {
    background-color: ${({ active }) => active ? 'red' : 'blue' };
  }
`;

function Button({ label, className, active }) {
  return (
    <ButtonStyled 
      className={`${className} button`} 
      active={active}
    >
      {label}
    </ButtonStyled>
  )
}

export default Button;
