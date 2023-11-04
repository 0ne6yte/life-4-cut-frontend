import type { Meta, StoryObj } from '@storybook/react';

import { useModal } from '@/contexts/ModalProvider';
import { Button } from '@/domain/_common/components';
import Modal from '@/domain/_common/components/Modal';

export default {
  title: 'Components/Modal',
  parameters: {
    docs: {
      story: {
        height: '500px',
      },
    },
  },
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const CloseConfirm: Story = {
  render: () => {
    const { openModal } = useModal();
    const onClickNormal = () => {
      openModal({
        title: '제목',
        message: '메시지',
      });
    };

    const onClickConfirmClose = () => {
      openModal({
        title: '제목',
        message: '메시지',
        closeButton: {
          text: '닫기',
        },
        confirmButton: {
          text: '확인',
          onClick: () => {
            alert('확인');
          },
        },
      });
    };

    const onClickConfirm = () => {
      openModal({
        title: '제목',
        message: '메시지',
        confirmButton: {
          text: '확인',
          onClick: () => {
            alert('확인');
          },
        },
      });
    };

    const onClickClose = () => {
      openModal({
        title: '제목',
        message: '메시지',
        closeButton: {
          text: '닫기',
        },
      });
    };

    const onClickCustom = () => {
      openModal({
        title: '제목',
        message: '메시지',
        closeButton: {
          text: '닫기',
          variant: 'text',
        },
        confirmButton: {
          text: '확인',
          variant: 'text',
          onClick: () => {
            alert('확인');
          },
        },
      });
    };

    return (
      <div className="flex flex-col w-[500px] gap-4 p-4">
        <Button variant="contained" onClick={onClickNormal}>
          Normal
        </Button>
        <Button variant="contained" onClick={onClickConfirmClose}>
          Confirm & Close
        </Button>
        <Button variant="contained" onClick={onClickConfirm}>
          Confirm
        </Button>
        <Button variant="contained" onClick={onClickClose}>
          Close
        </Button>
        <Button variant="contained" onClick={onClickCustom}>
          Custom
        </Button>
      </div>
    );
  },
};
