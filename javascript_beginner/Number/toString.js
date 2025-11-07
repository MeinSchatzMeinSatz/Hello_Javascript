// String 타입으로 변환

// toString()
/**: Number 인스턴스의 숫자 값을 문자열로 변환합니다.
 *
 * data: Number: 변환 대상
 * 파라미터: 진수(2~36) opt 디폴트: 10진수
 * 반환: 변환한 값
 *
 * data를 String 타입으로 변환
 * 변환할 때 주의 사항
 */

let value = 20;
console.log(20 === value.toString()); // false

console.log(value.toString(16)); // 16진수로 변환하여 출력: 14

// [코드 2] 유동 소수점 사용
console.log((20).toString());

/*
20.toString() 형태로 작성하면 에러가 난다.
20이 아니라 20.을 변환 대상으로 인식하므로 점(.)이 없는 valuetoString() 형태가 되기 때문이다.
3. 코드처럼 20..을 작성한다.
*/
