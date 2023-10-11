import React, { Fragment } from 'react';

import { ReactComponent as CloseIcon } from '@/assets/close.svg';
import { Button } from '@/domain/_common/components/Button';

interface ModalProps {
  title: string;
  message: string;
  onClose: () => void;
  closeButton?: {
    label: string;
  };
  confirmButton?: {
    label: string;
    onClick: () => void;
  };
}
export default function Modal({ title, message, onClose, closeButton, confirmButton }: ModalProps) {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" onClick={onClose} />
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="z-10 bg-white rounded-[12px] text-center flex flex-col p-6 justify-center items-start gap-6">
          <div className="text-[24px] font-bold stroke-grey-placeholder flex justify-between w-full">
            {title} <CloseIcon className="cursor-pointer" onClick={onClose} />
          </div>
          <div className="text-[18px] font-bold text-grey-placeholder">{message}</div>
          <div className="flex gap-6">
            {closeButton && (
              <Button isDisabled={false} type="text" onClick={onClose}>
                {closeButton.label}
              </Button>
            )}
            {confirmButton && (
              <Button isDisabled={false} type="primary" onClick={confirmButton.onClick}>
                {confirmButton.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
