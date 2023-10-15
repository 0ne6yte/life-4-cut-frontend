import { ReactComponent as CloseIcon } from '@/assets/close.svg';
import { Button, type ButtonProps } from '@/domain/_common/components/Button';

interface ModalProps {
  title: string;
  message: string;
  onClose: () => void;
  closeButton?: {
    text: string;
  } & Omit<ButtonProps, 'children'>;
  confirmButton?: {
    text: string;
  } & Omit<ButtonProps, 'children'>;
}
export default function Modal({ title, message, onClose, closeButton, confirmButton }: ModalProps) {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" onClick={onClose} />
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-6 w-full">
        <div className="z-10 m-auto max-w-[335px] bg-white rounded-[12px] text-center flex flex-col p-6 justify-center items-start gap-6">
          <div className="text-[24px] font-bold stroke-grey-placeholder flex justify-between w-full">
            {title} <CloseIcon className="cursor-pointer" onClick={onClose} />
          </div>
          <div className="text-[18px] font-bold text-grey-placeholder">{message}</div>
          {(!!closeButton || !!confirmButton) && (
            <div className="flex w-full gap-6">
              {closeButton && (
                <Button variant="contained" color="grey" onClick={onClose} {...closeButton}>
                  {closeButton.text}
                </Button>
              )}
              {confirmButton && (
                <Button variant="contained" color="red" {...confirmButton}>
                  {confirmButton.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
