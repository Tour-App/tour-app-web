import styled from 'styled-components';
import { Oval } from  'react-loader-spinner'
import PropTypes from 'prop-types';
import { lighten, darken } from 'polished';

const ButtonStyled = styled.button`
  &.button {
    background: ${({ filled }) => filled ? '#333333' : 'transparent'};
    color: ${({ filled }) => filled ? 'white' : 'black'};
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    border: 4px solid #333333;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    .button-spinner { 
      padding: 0;
    }
  }
  &.button:hover {
    background: ${({ filled }) => filled ? lighten(0.1 ,'#333333'): 'transparent'};
    border-color: ${lighten(0.1 ,'#333333')};
  }

  &.button:active { 
    background: ${({ filled }) => filled ? darken(0.5 ,'#333333'): 'transparent'};
    border-color: ${darken(0.5 ,'#333333')};
  }
`;

function Button({ 
  children, 
  label, 
  className, 
  type, 
  filled, 
  loading,
  onClick
}) {
  let buttonContent = children || label;
  if (loading) {
    buttonContent = (
      <Oval
        className="button-spinner"
        ariaLabel="loading-indicator"
        height={16}
        width={16}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="white"
        secondaryColor="white"
      />
    );
  }
  return (
    <ButtonStyled 
      className={`${className} button`}
      type={type}
      filled={filled}
      onClick={onClick}
    >
      {buttonContent}
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
  children: PropTypes.string,
  /**
   * Estado cuando el botón esta cargando
   */
  loading: PropTypes.bool,
  /**
   * Función a ejecutar cuando se da click
   */
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  className: '',
  label: '',
  filled: false,
  children: '',
  loading: false
}

export default Button;
