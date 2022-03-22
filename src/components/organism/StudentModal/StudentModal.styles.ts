import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  padding: 25px 0;
  background: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.primary};
  outline: none;
`;

export const Wrapper = styled.div`
  padding: 3em 3em;

  h4 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 1.5em 0;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
