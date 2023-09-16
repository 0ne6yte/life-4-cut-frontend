module.exports = {
  env: {
    browser: true, // window, document, fetch 등의 글로벌 변수 사용 허용
    es2021: true, // ES12 문법 사용 허용
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // console.log 사용 허용
    '@typescript-eslint/explicit-function-return-type': 'off', // 함수의 반환 타입을 명시적으로 작성하지 않아도 되도록 설정
    '@typescript-eslint/triple-slash-reference': 'off', // /// <reference path="..." /> 사용 허용
    'react/react-in-jsx-scope': 'off', // React를 import하지 않아도 사용할 수 있도록 설정
    'prefer-template': 'error', // string concatenation 대신 template literal 사용 권장. autofix 자동 치환 활성화
    'no-use-before-define': 'off', // 정의되기 전에 사용해도 무시
    'no-restricted-globals': 'off', // window, document, fetch 등의 글로벌 변수 사용 허용
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false, // promise를 처리할 수 없는 구문에 promise가 위치할 수 있음(jsx내 promise 사용 등)
      },
    ],
    curly: ['error', 'all'], // 블록 구문 사용 권장
  },
  ignorePatterns: ['.eslintrc.js'],
};
