// Global 프로퍼티
/**
 * 프로퍼티 리스트
 *
 * 값
 * NaN: Not a Number
 * Infinity: 무한대 값
 * undefined: undefined
 *
 * 함수
 * isNaN(): NaN 여부, NaN이면 true, 아니면 false 반환
 * isFinite(): 유한대 여부, 유한이면 true, 아니면 false
 * parseInt(): 정수로 변환하여 반환
 * parseFloat(): 실수로 변환하여 반환
 * eval(): 문자열을 JS 코드로 간주하여 실행- 바꾸는 건 괜찮은데 실행까지 하는 건 문제야.
 * encodeURI(): URI 인코딩
 * encodeURIComponent(): URI 확장 인코딩
 * decodeURI(): endcodeURI 함수의 인코딩 값을 디코딩
 * decodeURIComponent(): encodeURIComponent 함수의 인코딩 값을 디코딩
 */

// parsing: 문자열을 숫자로 바꾸거나 자바스크립트 코드로 바꾸거나 변환하는 것.

/**
 * Global 프로퍼티 종류
 *    NaN: Not a Number
 *    Infinity: 무한대
 *    undefined: undefined
 *
 * 상수 개념으로 사용
 *    외부에서 프로퍼티 값 변경 불가
 *    cf) 상수 개념은 보통 대문자로 쓰는데 이건 아님
 *
 * delete 연산자로 삭제 불가
 */

// 코드 1: 글로벌 프로퍼티
console.log(NaN); // NaN
console.log(Infinity); // Infinity
console.log(undefined); // undefined

// 글로벌 오브젝트의 프로퍼티와 함수는 window 오브젝트에 저장하는 것으로 되어 있어.
