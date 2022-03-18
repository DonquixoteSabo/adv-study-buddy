import React, { createContext } from 'react';
import Modal from 'react-modal';

interface IGroupContext {
  isModalOpen: boolean;
  openModal?: () => void;
  closeModal?: () => void;
}

export const GroupContext = createContext<IGroupContext>({
  isModalOpen: false,
});

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#group-modal');

const GroupContextProvider: React.FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <GroupContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
    </GroupContext.Provider>
  );
};

export default GroupContextProvider;
