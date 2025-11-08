// 문자열 추출

// substring()
/**
 * data: 반환 대상
 * 파라미터: 시작 인덱스 / 끝 인덱스
 * 반환: 결과
 *
 * 파라미터의 시작 인덱스부터 끝 인덱스의 직전까지 반환
 * 두 번째 파라미터를 작성하지 않으면 반환 대상의 끝까지 반환
 * 다양한 추출 조건 작성
 */

// 코드 1
let value = "01234567";
console.log(value.substring(2, 5)); // 234
// 2번 인덱스부터 5번 인덱스 직전까지 반환

// 코드 2
console.log(value.substring(5)); // 567
// 첫 번째 파라미터만 작성하면 첫 번째 인덱스부터 끝까지 반환
console.log(value.substring()); // 01234567
// 파라미터를 모두 작성하지 않으면 전체 반환

// 코드 3
console.log(value.substring(5, 20)); // 567
// 두 번째 파라미터 값이 전체 length보다 크면 전체 문자열 length 사용
// 따라서 시작 인덱스부터 끝까지 반환

// 코드 4
console.log(value.substring(-7, 2)); //01
// 파라미터 값이 음수이면 0으로 간주. 0번 인덱스부터 2번 인덱스 직전까지 반환
console.log(value.substring(5, 1)); // 1234
// 첫 번째 파라미터 값이 두 번째보다 크면 파라미터 값을 바꿔서 처리. value.substring(1, 5) 형태가 된다.
console.log(value.substring(5, "A")); // 01234
// NaN은 0으로 간주. 첫 번째 파라미터 값이 두 번째보다 크므로 value.substring(0, 5) 형태가 된다.

// slice()
/**
 * data: 반환 대상
 * 파라미터: 시작 인덱스 / 끝 인덱스
 * 반환: 결과
 *
 * 파라미터의 시작 인덱스부터 끝 인덱스 직전까지 반환
 * 첫 번째 파라미터
 *  값을 작성하지 않거나 NaN이면 0으로 간주
 * 두 번쨰 파라미터
 *  작성하지 않으면 length 사용
 *  값이 음수이면 length에 더해 사용
 */

// 코드 1
console.log(value.slice(1, 4)); // 123
// 1번 인덱스부터 4번 인덱스 직전까지 반환
console.log(value.slice(false, 4)); // 0123
// false, undefined, null, 빈 문자열은 0으로 간주

// 코드 2
console.log(value.slice("A")); // 01234567
console.log(value.slice()); // 01234567

// 코드 3
console.log(value.slice(5)); // 567
// 두 번째를 작성하지 않으면 length 사용
console.log(value.slice(5, 3)); // ""
// 첫 번째가 두 번째보다 크거나 같으면 빈 문자열

// 코드 4
console.log(value.slice(4, -2)); // 45
// 파라미터 값이 음수이면 length를 더해 사용
console.log(value.slice(-5, -2)); // 345
console.log(value.slice(-2, -5)); // ""
