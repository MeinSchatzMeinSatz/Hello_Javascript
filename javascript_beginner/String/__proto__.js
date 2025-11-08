// toString()
/**
 * data: 문자열, String 인스턴스
 * 파라미터: 사용하지 않음
 * 반환: 변환한 값
 *
 * data 위치의 값을 String 타입으로 변환
 */

// 코드 1
let value = 123;
let result = value.toString();
console.log(typeof result); // "string"

/**
 * "123".toString();
 * String 타입을 String 타입으로 변환
 * 의미가 없다?
 *
 * 그렇다면 toString() 함수가 필요한 이유
 * __proto__: toString();
 *  __proto__toString();
 * 이게 왜 필요할까?
 *  비록 문자열에서 문자열 형태로 변환하지만 그것이 없다면 키 밸류 형태로 변환하니깐 그렇게 하지 않기 위해서 잘라준 것. 그래서 계층적으로 내려갈 때 그것을 위에서 실행할 수 있게 만들어준 것.
 *
 * 그래서 대부분 빌트인 오브젝트에 toString()과 valueOf()가 있습니다.
 *
 * => 사실 이해가 안된다.
 */

/**
 * 클로드 정리 추가
 *
 * let str = "hello";
 *
 * 만약 String.prototype.toString이 없다면?
 * console.log(str.toString());
 * Object.prototype.toString()이 호출되어 "[object String]"이 반환
 *
 * String.prototype.toString()이 있기 때문에
 * console.log(str.toString()); // "hello" 반환
 */

/**
 * 핵심:
 * - 모든 객체는 Object.prototpye.toString()을 상속받는다.
 * - 이 메서드는 "[object Type]" 형태로 반환한다.
 * - 하지만 String은 자신만의 toString() 메서드를 가지고 있어서, 프로토타입 체인에서 "먼저 발견되어 실행" 된다.
 */

/**
 * 정리하면,
 *
 * 각 타입별로 toString() 을 정의해둔 이유는:
 * - 프로토타입 체인을 거슬러 올라가기 전에 해당 타입에 맞는 변환을 하기 위해서
 * - Object의 범용적인 toString()이 아닌, 각 타입에 특화된 toString()을 제공하기 위해서
 *
 * valueOf()도 마찬가지
 */

let value1 = 123;
value1.toString(); // built-in 넘버 오브젝트의 toString() 함수 호출.

"123".toString(); // built-in 스트링 오브젝트의 toString() 함수 호출.
