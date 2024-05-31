// StyledWrapper.js
import styled, { keyframes } from "styled-components";

// Keyframes for animations
const Right = keyframes`
  to { opacity: 1; transform: translateX(0); }
`;

const Left = keyframes`
  to { opacity: 1; transform: translateX(0); }
`;

const Top = keyframes`
  to { opacity: 1; transform: translateY(0); }
`;

// Styled components
export const Section = styled.section`
  &.start-animation .column:nth-child(1) {
    animation: ${Right} 1s ease forwards;
    animation-delay: 1 s;
  }

  &.start-animation .column:nth-child(2) {
    animation: ${Left} 1s ease forwards;
    animation-delay: 1 s;
  }

  &.start-animation .column h2 {
    animation: ${Top} 1s ease forwards;
    animation-delay: 1 s;
  }
`;

export const Row = styled.div`
  display: flex;
  column-gap: 4rem;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  flex: 1 1 30rem;
  &:nth-child(1) {
    opacity: 0;
    transform: translateX(-100px);
  }
  &:nth-child(2) {
    opacity: 0;
    transform: translateX(100px);
  }
  h2 {
    font-size: 2.5rem;
    margin: 2rem 0 1rem 1.96rem;
    transform: translateY(-100px);
    opacity: 0;
  }
`;

export const Box = styled.div`
  border-left: 0.2rem solid grey;
`;

export const EducationContent = styled.div`
  padding-left: 1.9rem;
`;

export const Content = styled.div`
  padding: 1.5rem;
  border: 0.2rem solid grey;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -2.8rem;
    top: -1.5rem;
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
    background: grey;
  }
  .year {
    font-size: 1.5rem;
    color: grey;
    i {
      color: grey;
      font-size: 1.5rem;
      margin-left: 0.5rem;
    }
  }
  h3 {
    font-size: 1.7rem;
    letter-spacing: 0.05rem;
    margin: 0.5rem 0;
  }
  p {
    font-size: 1.5rem;
  }
`;
