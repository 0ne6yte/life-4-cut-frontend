module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'es5', // 마지막 원소 뒤에 콤마를 붙일지 여부 - 객체, 배열O / 함수, 클래스X
  printWidth: 120,
  importOrder: ['<THIRD_PARTY_MODULES>', 'react', '^[@/]', '^[./]'],
  importOrderSeparation: true, // 줄바꿈을 사용하여 import 그룹을 분리할지 여부
  importOrderSortSpecifiers: false, // import 그룹내에서의 정렬 여부
};
