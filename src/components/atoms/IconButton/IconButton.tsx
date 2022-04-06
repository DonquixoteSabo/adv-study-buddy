import styled from 'styled-components';

interface IProps {
  isSmall?: boolean;
}

const IconButton = styled.button<IProps>`
  width: ${({ isSmall }) => (isSmall ? '24px' : '30px')};
  height: ${({ isSmall }) => (isSmall ? '24px' : '30px')};
  border-radius: 50%;
  border: none;
  background: #c0c7d6;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export default IconButton;
