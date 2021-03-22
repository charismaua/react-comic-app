import React from "react";
import styled from "@emotion/styled";

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-top: 50px;

  div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;

    &:after {
      content: " ";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #fff;
      margin: -4px 0 0 -4px;
    }

    &:nth-of-type(1) {
      animation-delay: -0.036s;
    }
  }

  & div:nth-of-type(1):after {
    background-color: #e74c3c;
    top: 63px;
    left: 63px;
  }
  & div:nth-of-type(2) {
    animation-delay: -0.072s;
  }
  & div:nth-of-type(2):after {
    background-color: #e67e22;
    top: 68px;
    left: 56px;
  }
  & div:nth-of-type(3) {
    animation-delay: -0.108s;
  }
  & div:nth-of-type(3):after {
    background-color: #f1c40f;
    top: 71px;
    left: 48px;
  }
  & div:nth-of-type(4) {
    animation-delay: -0.144s;
  }
  & div:nth-of-type(4):after {
    background-color: #2ecc71;
    top: 72px;
    left: 40px;
  }
  & div:nth-of-type(5) {
    animation-delay: -0.18s;
  }
  & div:nth-of-type(5):after {
    background-color: #3498db;
    top: 71px;
    left: 32px;
  }
  & div:nth-of-type(6) {
    animation-delay: -0.216s;
  }
  & div:nth-of-type(6):after {
    background-color: #0652dd;
    top: 68px;
    left: 24px;
  }
  & div:nth-of-type(7) {
    animation-delay: -0.252s;
  }
  & div:nth-of-type(7):after {
    background-color: #9b59b6;
    top: 63px;
    left: 17px;
  }
  & div:nth-of-type(8) {
    animation-delay: -0.288s;
  }
  & div:nth-of-type(8):after {
    background-color: #34495e;
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <StyledSpinner>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledSpinner>
  );
};

export default Spinner;
