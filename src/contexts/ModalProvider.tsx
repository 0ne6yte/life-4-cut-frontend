import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import Modal from '@/domain/_common/components/Modal';

interface ModalData {
  title: string;
  message: string;
}

interface ModalContextType {
  openModal: (data: ModalData) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);
export function ModalProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData>({ title: '', message: '' });

  const openModal = ({ title, message }: ModalData) => {
    setModalData({ title, message });
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
          buttons={[
            { type: 'normal', children: '확인', onClick: closeModal, isDisabled: false },
            { type: 'primary', children: '취소', onClick: closeModal, isDisabled: false },
          ]}
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
