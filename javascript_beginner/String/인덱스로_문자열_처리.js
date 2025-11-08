// charAt()
/**
 * data: 반환 대상
 * 파라미터: 반환 기준 인덱스(index)
 * 반환: 인덱스 n번째 문자
 *
 * 인덱스의 문자를 반환
 * 문자열 길이보다 인덱스가 크면
 *  빈 문자열 반환
 * 일반적으로 존재하지 않으면 undefined 반환
 */

// 코드 1
let value = "sports";
console.log(value.charAt(1)); // p 함수를 호출하는 형태
console.log(value[1]); // p 프로퍼티 이름으로 값을 구하는 형태

// 코드 2
let value1 = "sports";
console.log(value1.charAt(12)); // 파라미터의 인덱스가 전체 문자열 길이보다 크면 빈 문자열 반환("")

// 코드 3
console.log(value[12]); // 일반적으로 값이 존재하지 않으면 undefined를 반환

// indexOf()
/**
 * data: 검색 대상
 * 파라미터: 검색할 문자열 / 검색 시작 위치: 디폴트 0
 * 반환: 인덱스
 *
 * data 위치의 문자열에서 파라미터의 문자와 같은 첫 번째 인덱스를 반환
 *
 * 검색 기준
 *  왼쪽에서 오른쪽으로 검색
 *  두 번쨰 파라미터를 작성하면 작성한 인덱스부터 검색
 */

// 코드 1
let value2 = "123123";
console.log(value2.indexOf(2)); // 1
console.log(value2.indexOf(23)); // 1 왜 1번 인덱스가 반환될까! 23의 2!

// 코드 2
console.log(value2.indexOf(2, 3)); // 4

// 코드 3
console.log(value2.indexOf(15)); // -1
// cf) includes

// 코드 4
console.log(value2.indexOf(2, -1)); // 1 : 두 번째 파라미터값이 0보다 작으면 처음부터 검색
console.log(value2.indexOf(2, 9)); // -1 : 두 번째 파라미터 값이 length보다 크면 -1 반환
console.log(value2.indexOf(2, "A")); // 1 : 두 번째 파라미터 값이 NaN이면 처음부터 검색

// lastIndexOf()
/**
 * data: 검색 대상
 * 파라미터: 검색할 문자열 / 검색 시작 위치 디폴트: 0
 * 반환: 인덱스
 *
 * data 위치의 문자열에서 파라미터의 문자와 같은 인덱스를 반환. 단, 뒤에서 앞으로 검색
 * 검색 기준:
 *  두 번째 파라미터를 작성하면 작성한 인덱스부터 검색
 *  같은 문자가 없으면 -1 반환
 */

// 코드 1
console.log(value2.lastIndexOf(2)); // 4

// 코드 2
let value3 = "1231231";
console.log(value3.lastIndexOf(1, 4)); // 3
console.log(value3.lastIndexOf(2, -1)); // -1
