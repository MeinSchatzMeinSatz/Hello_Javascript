// contructor 프로퍼티
/**
 * 생성하는 function 오브젝트를 참조
 *    function 오브젝트를 생성할 때 설정
 *    prototype에 연결되어 있음
 *
 * 개인 경험
 *    contructor가 없더라도 인스턴스가 생성됨
 *    하지만, 필요하지 않다는 의미는 아닙니다.
 *
 * ES5: constructor 변경 불가
 *    생성자를 활용할 수 없음
 *
 * ES6: contructor 변경 가능
 *    활용성 높음
 */

/**
 * Book function 오브젝트: {
 *  prototype: {
 *    contructor: Book
 *  }
 * }
 */

/**
 * constructor 비교
 * 1. Book === Book.prototype.contructor;
 *    실행결과 1번에 true가 출력된 것은
 *    Book 오브젝트와
 *    Book.prototype.contructor가 타입까지 같다는 뜻
 *    Book 오브젝트를 생성할 때
 *    Book.prototype.contructor가
 *    Book 오브젝트를 참조하기 때문
 * 2. Book === obj.constructor;
 *    obj의 contructor;
 *    Book 오브젝트를 참조하므로
 *    실행결과 2번에 true가 출력된다.
 */

// 코드 1 constructor 비교
let Book = function () {};
let result = Book === Book.prototype.contructor;
console.log("1:", result); // true

let obj = new Book();
console.log("2:", Book === obj.constructor); // true

console.log("3:", typeof Book); // function
console.log("4:", typeof obj); // object

/**
 * 3. typeof Book;
 *    Book 오브젝트의 타입은 function
 * 4. typeof obj;
 *    obj 인스턴스의 타입은 object
 * 5. function 오브젝트를 인스턴스로 생성했더니
 *    object로 타입이 변경되었습니다.
 *    이것은 [[Contruct]]가 실행될 때
 *    생성한 오브젝트의 [[Class]]에
 *    Object를 설정하기 때문
 * 6. 오브젝트 타입이 바뀐다는 것은
 *    오브젝트 성격과 목적이 바뀐 것을 뜻합니다.
 *    다른 관점에서 접근해야 합니다.
 *    인스턴스의 관점에서 접근해야 한다. 인스턴스의 가장 큰 특징은 프로토타입이 있으며 이 프로토타입에 많은 메서드들이 연결된다는 것. 즉 함수가 하나가 아니라 다수이다.
 */
