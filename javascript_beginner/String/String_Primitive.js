// String()
/**
 * 파라미터: 변환 대상 opt
 * 반환: 변환한 값
 *
 * 파라미터 값을 String 타입으로 변환하여 반환
 *  값을 작성하지 않으면 빈문자열 반환
 *
 * 가독성
 * - String 오브젝트를 생성하지 않고("" + 123)도 숫자가 String 타입이 되지만, String(123) 형태가 가독성이 높다.
 */

let value = String(123);
console.log(value); // "123"
console.log(typeof value); // "string"
console.log(typeof ("" + 123)); // "string"

// new String()
/**
 * 파라미터: 값 opt
 * 반환: 생성한 String 인스턴스
 *
 * String 인스턴스를 생성하여 반환
 * 파라미터 값을 String 타입으로 변환
 *  파라미터 값이 프리미티브 값이 된다.
 */

let obj = new String(123);
console.log(typeof obj); // object

// valueOf()
/**
 * data: String 인스턴스, 문자
 * 파라미터: 사용하지 않음
 * 반환: 프리미티브 값
 *
 * String 인스턴스의 프리미티브 값 반환
 */

let obj1 = new String(123);
console.log(obj1.valueOf()); // 123
