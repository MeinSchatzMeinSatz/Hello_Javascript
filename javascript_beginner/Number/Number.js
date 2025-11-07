// Number()
/*
파라미터: 변환할 값 opt
반환: 변환한 값

- 파라미터 값을 Number 타입으로 변환
- 파라미터 값이 String 타입이라도 값이 숫자이면 변환 가능
- 숫자로 변환할 수 있으면 변환
- 파라미터 값을 작성하지 않으면 0을 반환
*/

console.log(Number("123") + 500); // 623
console.log(Number("ABC")); // NaN

// Number 상수
/*
Number.MAX_VALUE
- 표현할 수 있는 가장 큰 숫자 값
Number.MIN_VALUE
- 표현할 수 있는 가장 작은 숫자 값
Number.NaN
- 숫자가 아님을 나타내는 특수한 값
Number.NEGATIVE_INFINITY
- 음의 무한대
Number.POSITIVE_INFINITY
- 양의 무한대
*/
/*
상수는 값을 변경, 삭제할 수 없음.
영문 대문자 사용이 관례
Number.MAX_VALUE 형태로 값 사용.
*/
