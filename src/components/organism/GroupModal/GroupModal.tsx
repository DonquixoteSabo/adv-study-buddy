import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGetAllGroups } from '../../../hooks/useGetAllGroups';

const StyledModal = styled(Modal)`
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
`;

const Header = styled.header`
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  padding: ${({ theme }) => theme.spacing.m} 0;
  text-align: center;
`;

const Item = styled(Link)`
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

interface Props {
  isOpen: boolean;
  closeModal?: () => void;
}

const GroupModal = ({ isOpen, closeModal }: Props) => {
  const { isLoading, error, data } = useGetAllGroups();

  return (
    <StyledModal
      isOpen={isOpen}
      contentLabel="Select group"
      onRequestClose={closeModal}
      style={{
        overlay: { backgroundColor: ' rgba(115, 124, 142, 0.4)' },
      }}
    >
      <Header>Select a group</Header>
      {error ? (
        <h4>Error</h4>
      ) : isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          {data?.data.groups.map((group) => (
            <Item key={group} to={`/students/${group}`} onClick={closeModal}>
              {group}
            </Item>
          ))}
        </div>
      )}
    </StyledModal>
  );
};

export default GroupModal;
