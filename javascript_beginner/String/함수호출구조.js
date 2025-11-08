// JS 함수 호출 구조

/*
우선, 데이터 타입으로 
  -오브젝트를 결정하고
  - 오브젝트의 함수를 호출합니다.
*/

// 코드 1
let value = 123;
value.toString(); //

/*
toString(123)
  123을 파라미터에 작성
 */

// 코드 2: 파라미터에 값 작성
let result = toString(123);
console.log(result); // [object Undefined]

// Object 오브젝트의 toString()이 호출됩니다.
// 123을 오브젝트로 간주하여 Object 형태를 문자열로 변환합니다.
