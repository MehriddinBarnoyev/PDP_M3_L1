// StyledWrapper.js
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const Right = keyframes`
  to { opacity: 1; transform: translateX(0); }
`;

const Left = keyframes`
  to { opacity: 1; transform: translateX(0); }
`;

const Bottom = keyframes`
  to { opacity: 1; transform: translateY(0); }
`;

// Styled components for Skills section
export const SkillsSection = styled.section`
  &.start-animation .input:nth-child(1) {
    animation: ${Right} 1s ease forwards;
    animation-delay: 1.2s;
  }

  &.start-animation .input:nth-child(2) {
    animation: ${Left} 1s ease forwards;
    animation-delay: 1.2s;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  span {
    color: grey;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SkillContent = styled.div`
  flex: 1 1 45%;
  margin-bottom: 2rem;
`;

export const SkillTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const SkillBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: .2rem solid rgba(255, 255, 255, 0.3);
  border-radius: .8rem;
  padding: 1.5rem;
`;

export const SingleSkill = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
`;

export const Topic = styled.span`
  font-size: 1.5rem;
`;

export const BarSide = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: .5rem;
  overflow: hidden;
  height: 1rem;
  width: 100%;
`;

export const Bar = styled.div`
  background: grey;
  height: 100%;
  width: ${({ width }) => width || '0%'};
`;

// Styled components for Contact section
export const ContactSection = styled.section`
  &.start-animation .btn {
    animation: ${Bottom} 1s ease forwards;
    animation-delay: 1.4s;
  }
`;

export const Form = styled.form`
  max-width: 70rem;
  text-align: center;
  margin: 1rem auto;
  margin-bottom: 3rem;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '49%')};
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: .2rem solid rgba(255, 255, 255, 0.3);
  outline: none;
  backdrop-filter: blur(10px);
  filter: drop-shadow(0 0 100px grey);
  border-radius: .8rem;
  gap: 2.5rem;
  margin: .7rem 0;
  transition: .3s ease;
  opacity: 0;
  transform: translateY(100px);
  &::placeholder {
    font-size: 1.5rem;
    letter-spacing: .02rem;
  }
  &:focus, &:valid {
    border: .2rem solid grey;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: .2rem solid rgba(255, 255, 255, 0.3);
  outline: none;
  backdrop-filter: blur(10px);
  filter: drop-shadow(0 0 100px grey);
  border-radius: .8rem;
  gap: 2.5rem;
  margin: .7rem 0;
  transition: .3s ease;
  opacity: 0;
  transform: translateY(100px);
  resize: none;
  &::placeholder {
    font-size: 1.5rem;
    letter-spacing: .02rem;
  }
  &:focus, &:valid {
    border: .2rem solid grey;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  cursor: pointer;
  filter: none;
  border: .2rem solid rgba(255, 255, 255, 0.3);
  &:hover {
    background: grey;
    box-shadow: 0 0 .3rem grey, 0 0 .7rem grey;
  }
`;
