import React, { createContext, useState } from 'react';
import Modal from 'react-modal';

interface IExamContext {
  isExamModalOpen: boolean;
  openExamModal?: (id: string) => void;
  closeExamModal?: () => void;
  activeExam: null | string;
}

export const ExamContext = createContext<IExamContext>({
  isExamModalOpen: false,
  activeExam: null,
});

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#exam-modal');

const ExamContextProvider: React.FC = ({ children }) => {
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [activeExam, setActiveExam] = useState<string | null>(null);

  const openExamModal = (id: string) => {
    setActiveExam(id);
    setIsExamModalOpen(true);
  };
  const closeExamModal = () => {
    setActiveExam(null);
    setIsExamModalOpen(false);
  };

  const changeActiveExam = (id: string) => {};

  return (
    <ExamContext.Provider
      value={{
        openExamModal,
        closeExamModal,
        isExamModalOpen,
        activeExam,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export default ExamContextProvider;
