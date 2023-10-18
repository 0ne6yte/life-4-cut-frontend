import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@/domain/_common/components';
import { useForm } from '@/hooks';
import { yupSchema } from '@/utils/validation';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: [],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxForm: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        checkbox: '',
      },
      schema: {
        checkbox: yupSchema.requiredString,
      },
      mode: 'onChange',
    });

    return (
      <ul className="flex flex-col gap-3">
        <li>
          <Checkbox type="fatHorizontal" control={control} />
        </li>
        <li>
          <Checkbox type="fatVertical" control={control} />
        </li>
        <li>
          <Checkbox type="thinVertical" control={control} />
        </li>
      </ul>
    );
  },
};
