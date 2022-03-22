import React, { createContext } from 'react';
import Modal from 'react-modal';

interface IStudentsContext {
  isStudentModalOpen: boolean;
  openStudentModal?: (id: string) => void;
  closeStudentModal?: () => void;
  activeStudent: string | null;
}

export const StudentsContext = createContext<IStudentsContext>({
  isStudentModalOpen: false,
  activeStudent: null,
});

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#students-modal');

const StudentsContextProvider: React.FC = ({ children }) => {
  const [isStudentModalOpen, setIsStudentModalOpen] = React.useState(false);
  const [activeStudent, setActiveStudent] = React.useState<null | string>(null);

  const openStudentModal = (id: string) => {
    setActiveStudent(id);
    setIsStudentModalOpen(true);
  };
  const closeStudentModal = () => {
    setActiveStudent(null);
    setIsStudentModalOpen(false);
  };

  return (
    <StudentsContext.Provider
      value={{
        openStudentModal,
        closeStudentModal,
        isStudentModalOpen,
        activeStudent,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsContextProvider;
