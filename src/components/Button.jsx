import styled from 'styled-components';
import PropTypes from 'prop-types';
import { lighten } from 'polished';

const ButtonStyled = styled.button`
  &.button {
    background: ${({ filled }) => filled ? '#333333' : 'transparent'};
    color: ${({ filled }) => filled ? 'white' : 'black'};
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    border: 4px solid #333333;
    cursor: pointer;
  }
  &.button:hover {
    background: ${({ filled }) => filled ? lighten(0.1 ,'#333333'): 'transparent'};
    border-color: ${lighten(0.1 ,'#333333')};
  }
`;

function Button({ children, label, className, type, filled }) {
  return (
    <ButtonStyled 
      className={`${className} button`}
      type={type}
      filled={filled}
    >
      {children || label}
    </ButtonStyled>
  )
}

Button.propTypes = {
  /**
   * Una clase que se le pasa desde donde se manda a llamar
   */
  className: PropTypes.string,
  /**
   * El texto que aparece dentro del botón
   */
  label: PropTypes.string,
  /**
   * El botón tiene background
   */
  filled: PropTypes.bool,
  /**
   * El contenido de children
   */
  children: PropTypes.string
}

Button.defaultProps = {
  className: '',
  label: '',
  filled: false,
  children: '',
}

export default Button;
