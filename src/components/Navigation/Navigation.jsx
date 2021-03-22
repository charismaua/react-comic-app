import React from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { rgba } from 'polished';

const cloudSize = 300;

const StyledNav = styled.div`
    width: 100%;
    height: ${cloudSize/3*2}px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #64abf5;
    box-shadow: inset 0 -10px 20px ${rgba('#fff', 0.33)};

    .nav__wrapper {
        max-width: 100%;
    }

    .nav__cloud {
        background: #fff;
        border-radius: ${cloudSize/3}px;
        box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
        height: ${cloudSize/3}px;
        position: relative;
        width: ${cloudSize}px;
        z-index: 0;
        display: flex;
        align-items: center;
        max-width: 100%;
        margin-top: ${cloudSize/6}px;
        animation: movement 5s 0s infinite normal both;

        &:after, &:before {
            background-color: #fff;
            content: '';
            position: absolute;
            z-index: -1;
        }
        &:after {
            border-radius: ${cloudSize/3}px;
            height: ${cloudSize/3}px;
            left: ${cloudSize/7.5}px;
            top: -${cloudSize/7.5}px;
            width: ${cloudSize/3}px;
        }
        &:before {
            border-radius: ${cloudSize/2}px;
            width: ${cloudSize/2}px;
            height: ${cloudSize/2}px;
            right: ${cloudSize/9}px;
            top: -${cloudSize/4}px;
        }
    }

    @keyframes movement {
        0% {
            transform: translateY(5px);
            animation-timing-function: ease-in;
        }

        50% {
            transform: translateY(10px);
            animation-timing-function: ease-out;
        }

        100% {
            transform: translateY(5px);
        }
    }

    a { // children inside the navigation
        text-decoration: none;
        width: 100%;
        font-size: 20px;
        margin-bottom: 10px;
        color: #737373;
        transition: color 0.25s ease-out;

        &:hover {
            color: #1589af;
        }
    }
`;

const Navigation = ({children}) => {
    return (
    <StyledNav>
        <div className="nav__wrapper">
            <div className="nav__cloud">
                {children}
            </div>
        </div>
    </StyledNav>
    )
};

Navigation.propTypes = {
  children: PropTypes.node,
};

export default Navigation;