import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleStyled = styled.h1`
  &.title { 
    font-size: 3rem;
    font-weight: normal;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

function Title({ className, children }) {
  return (
    <TitleStyled className={`${className} title`}>{children}</TitleStyled>
  )
}

Title.propTypes = {
  /**
   * css class passed from parent component
   */
  className: PropTypes.string,
  /**
   * The text to render
   */
  children: PropTypes.string.isRequired,
}

Title.defaultProps = {
  className: '',
}

export default Title;