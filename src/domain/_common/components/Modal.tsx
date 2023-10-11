import React from 'react';

import { Button, type ButtonProps } from '@/domain/_common/components/Button';

interface ModalProps {
  title: string;
  message: string;
  buttons?: ButtonProps[];
}
export default function Modal({ title, message, buttons }: ModalProps) {
  return (
    <div>
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        {buttons?.map(({ isDisabled, onClick, type, children }, index) => (
          <Button key={index} type={type} onClick={onClick} isDisabled={isDisabled}>
            {children}
          </Button>
        ))}
      </div>
    </div>
  );
}
