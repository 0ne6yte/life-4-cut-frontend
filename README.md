# Life 4 Cut FE

# 디렉토리 구조

## 구조 Tree

``` text
📦src
 ┣ 📂apis
 ┣ 📂assets
 ┣ 📂domain
 ┃ ┣ 📂album
 ┃ ┃ ┣ 📂create
 ┃ ┃ ┣ 📂edit
 ┃ ┃ ┗ 📂list
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📂layouts
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂mypage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂photo
 ┃ ┃ ┗ 📂register
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┣ 📂layouts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┣ 📂stores
 ┣ 📂utils
 ┣ 📜App.tsx
 ┗ 📜main.tsx

```

## 구조 설명

### domain

해당 프로젝트는 도메인 단위로 분류하여 관리합니다. </br>

크게 Common, Album, Photo, MyPage, Login으로 구분됩니다.

- common: 재사용성이 높은, 공통적으로 사용되는 것들을 모아둡니다. 공통으로 사용되는 컴포넌트, hook, 그리고 레이아웃 등을 관리합니다.
- album: 앨범(사진첩)과 관련된 도메인입니다. 하위로 앨범 생성, 수정, 그리고 리스트 조회를 할 수 있습니다.
- photo: 사진과 관련된 도메인입니다. 사진을 등록할 때 사용되고, 추후 기능이 추가될 수 있습니다.
- mypage: 내 정보를 확인하고 수정할 수 있습니다.
- login: 로그인할 때 사용됩니다.

### 세부항목

- album - create: 앨범 등록에 해당됩니다.
- album - edit: 앨범 수정에 해당됩니다.
- album - list: 앨범 목록보기에 해당됩니다.
- album - [id]: (아직 미등록입니다.) 피그마 기준 사진 목록 보기에 해당됩니다.
- photo - register: 사진 추가에 해당됩니다.

## 참고

- [DDD와 MSA 기반으로 좋은 서비스 개발하기](https://helloworld.kurly.com/blog/ddd-msa-service-development/) - Kurly Tech Blog
- [Domain-Driven Design in Nuxt Apps](https://vueschool.io/articles/vuejs-tutorials/domain-driven-design-in-nuxt-apps/) -
  vueschool.io
- [프론트엔드, DDD 한숟갈 얹기](https://handhand.tistory.com/256) - owen.dev.log
- [프론트엔드 DDD를 만나다](https://www.youtube.com/watch?v=FeDBlSBPUz8) - FECONF 2022

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
    - `eslint-plugin-simple-import-sort`를 사용하여 import 순서를 정합니다.
        - importOrder: ['<THIRD_PARTY_MODULES>', 'react', '^[@/]', '^[./]'],
- Husky + Lint-staged
    - 커밋전 eslint & prettier를 실행하는 pre-commit hook을 설정합니다.
    - git hook 활성화를 위해 project 최초 세팅시 `yarn prepare` 을 실행해야합니다.

### Commit message convention

- committizen을 사용하여 커밋 메시지를 작성합니다. 형식: [type]: [subject]
- 실행방법

  `yarn cz` 

