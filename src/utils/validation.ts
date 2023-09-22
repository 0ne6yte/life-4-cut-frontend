import * as yup from 'yup';

export const yupSchema = {
  string: yup.string(),
  number: yup.number().typeError('숫자만 입력해주세요'),
  requiredString: yup.string().required('값을 입력해주세요'),
  requiredNumber: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? undefined : value))
    .required('값을 입력해주세요')
    .typeError('숫자만 입력해주세요'),
};
