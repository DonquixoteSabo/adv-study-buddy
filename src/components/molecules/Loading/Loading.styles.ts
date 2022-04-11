import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.m} ${({ theme }) => theme.spacing.l};
  background: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  width: max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  place-items: center;
`;

export const Message = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-size: 20px;
  font-weight: 700;
`;

export const Circle = styled.div`
  display: inline-block;
  width: 55px;
  height: 55px;
  animation: 1.5s linear infinite ${spinner};
  animation-play-state: inherit;
  border: solid 5px #cfd0d1;
  border-bottom-color: #1c87c9;
  border-radius: 50%;
  margin-top: 1em;
  will-change: transform;
`;