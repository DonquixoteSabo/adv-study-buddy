import styled from 'styled-components';
import Modal from 'react-modal';

import Button from 'components/atoms/Button/Button';

export const StyledModal = styled(Modal)`
  width: 400px;
  padding: 3em 3em;
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
`;

export const StyledButton = styled(Button)`
  align-self: center;
  margin-top: 4em;
`;
