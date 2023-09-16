import * as yup from 'yup';

import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { TextInput } from '@/domain/_common/components';
import { yupResolver } from '@hookform/resolvers/yup';

const meta: Meta<typeof TextInput> = {
  title: 'Example/TextInput',
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
      resolver: yupResolver(yup.object().shape({ value1: yup.string().required('값을 입력해주세용') })),
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
        <TextInput name="value1" label="WithError" control={control} />
        <button type="submit">submit</button>
      </form>
    );
  },
};

export const UseChecking: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        name: '',
      },
      resolver: yupResolver(yup.object().shape({ name: yup.string().required('값을 입력해주세용') })),
    });

    return <TextInput name="name" label="UseChecking" control={control} useCheckmark />;
  },
};
