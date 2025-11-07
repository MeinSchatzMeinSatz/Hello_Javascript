// toLocaleString()

/*
data: 변환 대상
파라미터: 사용하지 않음
반환: 변환한 값

  - 숫자를 브라우저가 지원하는 지역화 문자로 변환
    - 지역화 지원 및 형태를 브라우저 개발사에 일임
    - 지역화를 지원하지 않으면 toString()으로 변환

  - 스펙 상태
    - ES5: 파라미터 사용 불가
    - ES6: 파라미터에 언어 타입 사용 가능---코드
*/

let value = 1234.56;
console.log(value.toLocaleString()); // 1,234.56
console.log(value.toLocaleString("de-DE")); // 1.234,56
console.log(value.toLocaleString("zh-Hans-CN-u-nu-hanidec")); // 一,二三四.五六
