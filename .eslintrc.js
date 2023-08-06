module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:prettier/recommended'],
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
    '@typescript-eslint/explicit-function-return-type': 'off', // 함수의 반환 타입을 명시적으로 작성하지 않아도 되도록 설정
    'react/react-in-jsx-scope': 'off', // React를 import하지 않아도 사용할 수 있도록 설정
  },
  ignorePatterns: ['.eslintrc.js'],
};
