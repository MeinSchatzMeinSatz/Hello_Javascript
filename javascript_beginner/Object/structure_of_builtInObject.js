// 빌트인 오브젝트의 구조
/**
 * 오브젝트 이름(Object, String, Number ...)
 * 오브젝트.prototype
 *  - 프로토타입은 인스턴스 생성 가능 여부 기준
 *  - 프로토타입은 프로퍼티를 연결하는 오브젝트
 *  - cf) Math Object는 인스턴스를 만들 수가 없다.
 * 오브젝트.prototype.contructor
 *  오브젝트의 생성자
 *  ex) new Number를 호출하게 되면 생성자 함수를 호출한 것.
 * 오브젝트.prototype.method
 *  메소드 이름과 함수 작성
 *  프로토타입에 연결된 함수를 메서드라고 한다.
 *
 * [메소드와 함수] : 다음 기회에.
 */

// 오브젝트 구조
/**
 * 1. obj에 Object 빌트인 오브젝트가 할당됩니다.
 * 2. 오른쪽 Local의 obj를 펼칩니다.
 *  - 빌트인 Object 오브젝트에 포함된 프로퍼티입니다.
 *  - assign: f assign() 처럼 표시된 것이 함수
 *  - length: 1, name: "Object"처럼 표시된 것이 프로퍼티 입니다.(키와 밸류)
 *
 * 3. prototype을 펼칩니다.
 * 4. contructor가 있으며 f Object()입니다.
 *  - 이것이 시멘틱 그대로 생성자입니다.
 *
 * 5. new Object()를 하거나 let obj = {};를 실행하면
 *  - 생성자가 호출되어 Object가 인스턴스를 만듭니다.
 * 6. ES5에서는 contructor를 변경할 수 없지만
 *  - ES6에서는 변경할 수 있습니다.
 */

// 이름, 프로토타입, 프로토타입에다가 프로퍼티를 연결
