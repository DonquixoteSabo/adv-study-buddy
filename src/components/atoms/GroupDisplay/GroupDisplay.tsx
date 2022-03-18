import React, { useContext } from 'react';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { GroupContext } from 'helpers/GroupContext';

export const Header = styled.header`
  line-height: ${({ theme }) => theme.lineHeights.md};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.xl2};
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-weight: 700;
`;
 
interface Props {
  group: string;
}

const GroupDisplay = ({ group }: Props) => {
  const { openModal } = useContext(GroupContext);
  return (
    <>
      <Header>Group {group?.toUpperCase()}</Header>
      <div onClick={openModal}>
        <Button>change group {'>'}</Button>
      </div>
    </>
  );
};

export default GroupDisplay;
