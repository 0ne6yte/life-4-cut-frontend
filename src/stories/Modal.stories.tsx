import type { Meta, StoryObj } from '@storybook/react';

import { useModal } from '@/contexts/ModalProvider';
import { Button } from '@/domain/_common/components';

export default {
  title: 'Components/Modal',
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KHvd0JBcID35sOdr61Iief/Main?type=design&node-id=216-7319&mode=design&t=jq3LIMBJupzd6oGf-4',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HTMLDivElement>;

type Story = StoryObj<typeof HTMLDivElement>;
export const Basic: Story = {
  render: () => {
    const { openModal } = useModal();

    const onClick = () => {
      openModal({
        title: '제목',
        message: '메시지',
        closeButton: {
          label: '닫기',
        },
        confirmButton: {
          label: '확인',
          onClick: () => {
            alert('확인');
          },
        },
      });
    };

    return (
      <Button isDisabled={false} type="primary" onClick={onClick}>
        클릭
      </Button>
    );
  },
};
