import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from './Texts/Title';
import Button from './Button';
import Calendar from '../assets/calendar.svg';
import More from '../assets/more.svg';

const CardStyled = styled.div`
    &.card {
        padding: 15px;
        display: flex;
        flex-direction: column;
        border: 2px solid grey;
        border-radius: 18px;
        height: 170px;
        width: 500px;
    },
    .date-container{
        display: flex;
    },
    .small-btn {
        width: 110px;
        border-radius: 35px;
        height: 40px;
    }
    .calendar-icon {
        width: auto;
        height: 24px;
    },
    .more-icon {
        width: auto;
        height: 40px;
    }
`;

export default function Card({ className }) {
  return (
    <CardStyled className={`${className} card`}>
        <Title> Trip to neverland </Title>
        <div className="date-container">
            <div><img src={Calendar} alt='' className="calendar-icon"/> 12/23-01/03</div>
            <Button filled className="small-btn">Share</Button>
            <img src={More} alt='' className="more-icon"/>
        </div>
    </CardStyled>
  )
}

Card.propTypes = {
    /**
     * css class passed from parent component
     */
    className: PropTypes.string
  }
  
  Card.defaultProps = {
    className: '',
  }