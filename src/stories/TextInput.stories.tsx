import type { Meta, StoryObj } from '@storybook/react';

import { Button, TextInput } from '@/domain/_common/components';
import { useForm } from '@/hooks';
import { yupSchema } from '@/utils/validation';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KHvd0JBcID35sOdr61Iief/Main?type=design&node-id=216-7319&mode=design&t=jq3LIMBJupzd6oGf-4',
    },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        value1: '',
      },
    });
    return <TextInput name="value1" label="Basic" control={control} />;
  },
};

export const Error: Story = {
  render: () => {
    const { control, handleSubmit } = useForm({
      defaultValues: {
        value1: '',
      },
      schema: { value1: yupSchema.requiredString },
    });

    const onSubmit = handleSubmit((data) => {
      console.log(data);
      // api 호출
      const isError = true;
      if (isError) {
        control.setError('value1', { message: '삐빅. 이미 존재하는 앨범명 ㅅㄱ' });
      }
    });
    return (
      <form onSubmit={onSubmit}>
        <TextInput name="value1" label="Error" control={control} />
        <Button variant="primary" onClick={onSubmit}>
          submit
        </Button>
      </form>
    );
  },
};

export const UseCheckmark: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        value1: '',
      },
      schema: { value1: yupSchema.requiredNumber },
      mode: 'onChange',
    });

    return <TextInput name="value1" label="UseCheckmark" control={control} useCheckmark />;
  },
};

export const NumberInput: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        value1: '',
      },
      schema: { value1: yupSchema.number },
      mode: 'onChange',
    });

    return <TextInput name="value1" label="NumberInput" control={control} />;
  },
};
