import { Input } from '@/domain/_common/components';
var meta = {
    title: 'Example/Input',
    component: Input,
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
export var WithoutText = {
    args: {
        label: 'Without text',
    },
};
export var WithText = {
    args: {
        label: 'With text',
        defaultValue: 'value',
    },
};
export var Error = {
    args: {
        label: 'Error',
        defaultValue: '엥?',
        errorMessage: '삐빅. 이미 존재하는 앨범명 ㅅㄱ',
        isError: true,
    },
};
export var Checked = {
    args: {
        label: 'Checked',
        defaultValue: 'value',
        isChecked: true,
    },
};
