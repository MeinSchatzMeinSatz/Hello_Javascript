// 1. 빌트인 Object 프로퍼티(ES3)

/**프로퍼티 리스트
 * new Object() : 파라미터(로 들어간) 데이터 타입의 인스턴스 생성
 * Object() : Object 인스턴스 생성
 * Object.prototype
 * contructor : 생성자
 *
 * // (ES3 기준, 아래의 함수는 인스턴스를 만드는 모든 Object에 포함된다. instance.__proto__.__proto__에 포함된다.)
 * valueOf() : 프리미티브(인스턴스에 설정된) 값 반환
 * hasOwnProperty() : 프로퍼티 소유 여부 반환
 * propertyIsEnumerable() : 프로퍼티 열거(enumerable) 여부 반환
 * isPrototypeOf() : prototype의 존재 여부 반환
 * toString() : 문자열로 변환
 * toLocaleString() : 지역화 문자열로 변환
 */

// 2. Object 인스턴스 생성
// new Object()
/**
 * 파라미터: 값 opt
 * 반환: 생성한 인스턴스
 *
 * - 인스턴스를 생성하여 반환
 * - "파라미터의 데이터 타입"에 따라 생성할 인스턴스 결정
 *    - Number / String 인스턴스와 차이점.
 */

// 코드 1
let newNum = new Number(123);
console.log(typeof newNum); // object
console.log(newNum + 100); // 223

// 코드 2
let newObj = new Object(123);
console.log(typeof newObj); // object
console.log(newObj + 100); // 223

/*
- new Object(123)로 생성한 인스턴스의 타입도 object이고 프리미티브 값은 123
- 2개 인스턴스 모두 100을 더할 수 있으며 값이 더해진다는 것은 Number 타입이라는 것.
- new Object()는 파라미터 값 타입이 
  Number 타입이면 Number 인스턴스를 생성하고 
  String 타입이면 String 인스턴스를 생성
*/

/**
 * 파라미터의 값이 undefined, null 이면
 *  빈 Object 인스턴스 반환
 */

// 코드 3
let newObj1 = new Object();
console.log(newObj1); // {}

// Object()
/**
 * 파라미터: 값opt
 * 반환: 생성한 인스턴스
 *
 * (new 연산자를 사용하지 않고)
 * Object 인스턴스 생성
 *  파라미터는 {name: value} 형태
 */

// 코드 1
let obj = Object({ name: "JS책" });
console.log(obj); // { name: "JS책" }

let emptyObj = Object();
console.log(emptyObj); // {}

// Object() === new Object()와 결과는 {}로 같다.

// Object 생성 방법
let abc = {};
// let abc = Object() 와 같다.
// 즉, let abc = {}를 실행하면 Object 인스턴스가 생성된다.

// 코드 1
let obj1 = Object({ name: "value" });
console.log(obj1); // {name: "value"}
console.log(obj1 instanceof Object); // true
// true가 출력된 것은 Object로 생성한 인스턴스를 뜻한다.

/*
{}를 오브젝트 리터럴(literal)이라고 부름
*/

// 코드 2
let obj2 = { name: "value" };
console.log(obj2); // { name: "value" }
console.log(obj2 instanceof Object); // true

// 결론, 둘은 같다.
// Object와 Object literal 모두 Object 인스턴스를 생성하는 것. 그렇다면 리터럴로 씁시다. 더 간단하고 좋으니까!

// valueOf()
/**
 * data: Object 인스턴스, 숫자
 * 파라미터: 사용하지 않음
 * 반환: 프리미티브 값
 *
 * data 위치에 작성한 Object 인스턴스의 프리미티브 값 반환
 */

// 코드 1
let obj3 = { key: "value" };
console.log(obj3.valueOf()); // {key: "value"}
