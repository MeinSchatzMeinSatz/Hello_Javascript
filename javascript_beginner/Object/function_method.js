// 함수와 메서드 연결

/**
 * 함수
 *  오브젝트에 연결
 *  Object.create()
 *
 * 메서드
 *  오브젝트의 prototype에 연결
 *  Object.prototype.toString()
 */

// cf) 스태틱 메서드?

// 함수, 메서드 호출
/**
 * 함수 호출 방법
 *  Object.create();
 */

// 코드 1
console.log(Object.create); // function create() { [native code] }
console.log(Object.prototype.create); // undefined
// 1. Object에 create가 존재하므로 함수 출력
// 2. Object.prototpye에 create가 존재하지 않으므로 undefined가 출력

/**
 * 메서드 호출 방법
 *  Object.prototype.toString();
 *  또는 인스턴스를 생성하여 호출
 */

console.log(Object.prototype.toString); //
// function create() { [native code] }

let obj = {};
console.log(obj.toString); // function create() { [native code] }
// 1. Object.prototype에 toString이 존재하므로 함수 출력
// 2. 인스턴스를 사용하여 메서드를 호출할 때에는 prototype을 작성하지 않습니다.
// prototype에 연결된 메서드로 인스턴스를 생성하기 때문

/**
 * 함수와 메서드를 구분해야 하는 이유
 *  JS 코드 작성 방법이 다르기 때문
 *  함수는 파라미터에 값을 작성하고 메서드는 메서드 앞에 값을 작성
 */

console.log(String.fromCharCode(49, 65)); // 1A
// 1. 함수 앞에 배열로 값을 작성하면 Array 오브젝트의 함수가 호출되므로
// 2. String 오브젝트의 함수를 호출하면서 파라미터에 값을 작성해야 합니다.

// 프로퍼티 처리 메서드
// hasOwnProperty()
/**
 * object: 기준 인스턴스
 * 파라미터: 프로퍼티 이름
 * 반환: true, false
 *
 * 인스턴스에 파라미터 이름이
 *    존재하면 true 반환
 *    존재하지 않으면 false 반환
 * 자신이 만든 것이 아니라
 *    상속받은 프로퍼티이면 false 반환
 */

// 코드 1
let obj1 = { value: 123 };
let own = obj1.hasOwnProperty("value");
console.log(own); // true

// obj 인스턴스에 value 프로퍼티가 존재하며
// obj를 만들면서 직접 작성했으므로 true 반환

// 코드 2
let obj2 = { value: undefined };
own = obj2.hasOwnProperty("value");
console.log(own); // true
// 값은 체크하지 않음

// 코드3 - 자신이 만든 것이 아니라 상속받은 프로퍼티의 경우
let obj3 = {};
own = obj.hasOwnProperty("hasOwnProperty");
console.log(own); // false

// propertyIsEnumerable()
/**
 * object: 인스턴스, 오브젝트
 * 파라미터: 프로퍼티 이름
 * 반환: true, false
 *
 * 오브젝트에서 프로퍼티를
 *    열거할 수 있으면 true 반환
 *    열거할 수 없으면 false 반환
 */

// 코드 1 - 열거할 수 있는 경우
let obj4 = { sports: "football" };
console.log(obj4.propertyIsEnumerable("sports")); // true
// {sports: 'football'} 형태로 생성한 인스턴스는 obj의 프로퍼티를 열거할 수 있습니다.

// 코드 2 - 열거할 수 없는 경우
Object.defineProperty(obj4, "sports", {
  enumerable: false,
});

console.log(obj4.propertyIsEnumerable("sports")); // false

for (let name in obj4) {
  console.log(name);
}
