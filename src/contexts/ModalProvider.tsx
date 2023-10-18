import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { type ButtonProps } from '@/domain/_common/components';
import Modal from '@/domain/_common/components/Modal';

interface ModalData {
  title: string;
  message: string;
  closeButton?: {
    text: string;
  } & Omit<ButtonProps, 'children'>;
  confirmButton?: {
    text: string;
  } & Omit<ButtonProps, 'children'>;
}

interface ModalContextType {
  openModal: (data: ModalData) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);
export function ModalProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData>({ title: '', message: '' });

  const openModal = ({ title, message, closeButton, confirmButton }: ModalData) => {
    setModalData({
      title,
      message,
      closeButton,
      confirmButton,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData({ title: '', message: '' });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <Modal
          title={modalData.title}
          message={modalData.message}
          onClose={closeModal}
          closeButton={modalData.closeButton}
          confirmButton={modalData.confirmButton}
        />
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
