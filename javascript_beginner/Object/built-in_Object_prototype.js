// Object와 prototype

// 빌트인 Object의 특징
/**
 * 인스턴스를 만들 수 있는 모든 빌트인 오브젝트의 __proto__ 에 Object.prototype의 6개 메서드가 설정됨
 *
 * 따라서 빌트인 오브젝트로 만든 인스턴스에도 설정됨.
 *
 * Object.prototype
 */

// isPrototypeOf()
/**
 * object: 검색할 오브젝트 prototype
 * 파라미터: 검색 대상 오브젝트
 * 반환: true, false
 *
 * 파라미터에 작성한 오브젝트에
 *    object 위치에 작성한 prototype이
 *    존재하면 true 반환
 *    존재하지 않으면 false 반환
 */

// 코드 1 : 프로퍼티 존재 여부
let numObj = new Number(123);
console.log(Object.prototype.isPrototypeOf(numObj)); // true
// 1. Object.prototype처럼 오브젝트의 prototype를 작성합니다.
// 2. numObj에 Object.prototype의 존재를 체크합니다. 존재하므로 true 반환

// toString()
/**
 * object: Object 인스턴스
 * 파라미터: 사용 불가
 * 반환: 변환한 값
 *
 * 인스턴스 타입을 문자열로 표시
 *
 * 오브젝트에 toString()이 있으면
 *    toString()이 호출되고
 *    없으면 Object의 toString()이 호출됨
 */

// 코드 1 : 인스턴스 타입을 문자열 표시
let point = { book: "책" };
console.log(point.toString()); // [object Object]
// [인스턴스 빌트인-오브젝트]를 나타냄

let obj = new Number(123);
console.log(Object.getPrototypeOf.toString.call(obj)); // [object Number]
