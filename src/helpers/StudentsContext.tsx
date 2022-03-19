import React, { createContext } from 'react';
import Modal from 'react-modal';

interface IStudentsContext {
  isStudentModalOpen: boolean;
  openStudentModal?: () => void;
  closeStudentModal?: () => void;
}

export const StudentsContext = createContext<IStudentsContext>({
  isStudentModalOpen: false,
});

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#students-modal');

const StudentsContextProvider: React.FC = ({ children }) => {
  const [isStudentModalOpen, setIsStudentModalOpen] = React.useState(false);

  const openStudentModal = () => setIsStudentModalOpen(true);
  const closeStudentModal = () => setIsStudentModalOpen(false);
  
  return (
    <StudentsContext.Provider
      value={{ openStudentModal, closeStudentModal, isStudentModalOpen }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsContextProvider;
