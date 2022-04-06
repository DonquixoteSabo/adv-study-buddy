import styled from 'styled-components';

const Button = styled.button`
  display: grid;
  place-items: center;
  padding: 7px 25px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xs};
  border-radius: 96.94px;
  color: ${({ theme }) => theme.colors.primary};
  background: #eceff7;
  font-weight: 700;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover {
    color: white;
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export default Button;
