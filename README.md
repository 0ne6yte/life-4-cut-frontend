# Life 4 Cut FE

### Code formatting

- ESLint
  - `.eslintrc.js`에 작성된 설정을 따릅니다.
  - `yarn eslint --init` 로 초기화된 설정파일(`.eslintrc.js`)을 사용합니다. 
  - 선택 옵션
      - To check syntax, find problems, and enforce code style
      - JavaScript modules (import/export)
      - React
      - TypeScript
      - run in Browser
      - Use a popular style guide
      - [standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)
      - config file format - JavaScript

- Prettier
  - `.prettierrc.js`에 작성된 설정을 따릅니다.
  - `eslint-plugin-simple-import-sort`를 사용하여 import 순서를 정합니다.-+
    - importOrder: ['<THIRD_PARTY_MODULES>', 'react', '^[@/]', '^[./]'],

- Husky + Lint-staged
  - 커밋전 eslint & prettier를 실행하는 pre-commit hook을 설정합니다.
  - git hook 활성화를 위해 project 최초 세팅시 `yarn prepare` 을 실행해야합니다.
