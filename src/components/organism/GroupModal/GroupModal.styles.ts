import styled from 'styled-components';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

interface Props {
  isLoading: boolean;
}

export const StyledModal = styled(Modal)<Props>`
  width: 300px;
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
  align-items: ${({ isLoading }) => isLoading && 'center'};
`;

export const Header = styled.header`
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  padding: ${({ theme }) => theme.spacing.m} 0;
  text-align: center;
`;

export const Item = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 1em 0;
  margin: 0 ${({ theme }) => theme.spacing.l};
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #eceff7;
  }
`;
