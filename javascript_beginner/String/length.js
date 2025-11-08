// length 프로퍼티
/**
 * 문자 수 반환
 * length 프로퍼티 활용
 * length 값이 반환되는 논리
 */

// 코드 1
let value = "ABC";
console.log(value.length); // 3

// 코드 2
let value1 = "ABC";
for (let k = 0; k < value1.length; k++) {
  console.log(value1[k]);
}

// A B C

// 코드 3
// 어떻게 Value.length를 사용할 수 있을까?
// length 프로퍼티가 없음에도 불구하고 사용할 수 있는 이유

let value2 = "ABC";
console.log(value2.length); // 3
let obj1 = new String("ABC");
obj = string("ABC");

/**
 * 1. 오른쪽 Local의 obj를 펼치면 length: 3이 있다.
 * 2. 이것은 value 변수와 obj가 같다는 뜻이기도 하다.
 * 3. 엔진이 value.length를 만나면
 *  - value가 String 타입이므로
 *  - 내부에서 New Strimg("ABC")를 하게 되며
 *  - 생성한 인스턴스의 length 값인 3을 반환하게 된다.
 */

// 래핑하는 건가?
// length 프로퍼티는 누가 만들지? 자바스크립트 엔진
// 프리미티브 값도 자바스크립트 엔진이 만든다.

// 정리 => 3번의 과정을 기억할 것. 이걸 래퍼함수라고 하나?
// 자바스크립트 구조는 프로퍼티 구조.
