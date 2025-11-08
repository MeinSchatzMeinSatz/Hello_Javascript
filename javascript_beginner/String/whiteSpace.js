// trim()
/**
 * data: 삭제 대상
 * 파라미터: 사용하지 않음
 * 반환: 삭제한 결과
 *
 * 문자열 앞 뒤의 화이트 스페이스 삭제
 * 메소드 체인(Method chaining) 가능
 */

// 코드 1
let value = "  abcd   ";
console.log(value.length); // 9
console.log(value.trim().length); // 4
// abcd.length 라고 넣어도 자바스크립트 엔진에서 타입을 보고서 new String('a,b,c,d')로 인스턴스를 만들고 거기에 length 프로퍼티가 만들어지고, 그 length 값이 만들어지는 것.

// 코드 2
