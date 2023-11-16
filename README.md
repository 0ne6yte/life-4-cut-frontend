# Life 4 Cut FE

### 사이트 URL: https://life-4-cut.netlify.app/

### Run & Build

| description           | command        | port |
| --------------------- | -------------- |------|
| 개발모드 실행         | `yarn dev`     | 8080  |
| 프로덕션 빌드 preview | `yarn preview` | 4173 |
| 빌드                  | `yarn build`   |      |

### Storybook

프로젝트에서 사용되는 컴포넌트를 확인할 수 있습니다.

| description   | command                | port |
| ------------- | ---------------------- | ---- |
| 스토리북 실행 | `yarn storybook`       | 6006 |
| 스토리북 빌드 | `yarn build-storybook` |      |

### tswagger
api fetch를 위한 코드를 백엔드 swagger API 문서 기반으로 생성합니다.
```bash
yarn tswagger
```
### 디렉토리 구조

```text
📦src
 ┣ 📂apis
 ┣ 📂assets
 ┣ 📂hooks
 ┣ 📂routers 
 ┣ 📂stores  
 ┣ 📂stories
 ┣ 📂utils
 ┣ 📂domain
 ┃ ┣ 📂_common
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┗ 📂layouts
 ┃ ┣ 📂album
 ┃ ┃ ┗ 📂create
 ┃ ┃   ┣ 📂components
 ┃ ┃   ┗ 📜index.tsx
 ┃ ┗ 📂...
 ┣ 📜App.tsx
 ┣ 📜global.css
 ┗ 📜Main.tsx

```

### domain

해당 프로젝트는 도메인 단위로 분류하여 관리합니다.

- _common: 재사용성이 높은, 공통적으로 사용되는 모듈들을 모아둡니다. 특히 스타일 관련 모듈들을 관리합니다.(component, styles, layouts) 

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
  -
- Prettier
  - `.prettierrc.js`에 작성된 설정을 따릅니다.
  - `@trivago/prettier-plugin-sort-imports`를 사용하여 import 순서를 정합니다.
    - importOrder: `['<THIRD_PARTY_MODULES>', 'react', 'react-router-dom', 'react-hook-form', '^[@/]', '^[./]']`,
- Husky + Lint-staged
  - 커밋전 eslint & prettier를 실행하는 pre-commit hook을 설정합니다.
  - git hook 활성화를 위해 project 최초 세팅시 `yarn prepare` 을 실행해야합니다.

### Commit message convention

- committizen을 사용하여 커밋 메시지를 작성합니다. 형식: [type]: [subject]
- 실행방법

  `yarn commit`

### File naming convention
- components: `PascalCase`
- functions, css: `camelCase`
- assets: `kebab-case`
- constants: `UPPER_SNAKE_CASE`
