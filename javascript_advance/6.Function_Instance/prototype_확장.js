// prototype 확장
/**
 * prototype 확장 방법
 *
 * prototype에 프로퍼티를 연결하여 작성
 *    prototype.name = value 형태
 *
 * name에 프로퍼티 이름 생성
 * value에 JS 데이터 타입 작성
 *    일반적으로 function을 사용
 * prototype에 null을 설정하면 확장 불가
 */

/**
 * 프로퍼티 연결 고려사항
 *
 * prototype에 연결할 프로퍼티가 많을 때
 *    Book.prototype.name1, 2, 3 ~ N 형태는
 *    Book.prototype을 반복해서 작성해야 하므로 번거롭다.
 *    Book.prototype = {name1: value, ...} 형태로 작성
 *
 * constructor가 지워지는 문제와 대책
 *    {name1: value, ...} 형태로 설정한 후
 *    prototype에 contructor를 다시 연결
 */

// constructor 연결
/**
 * 1. 오브젝트 리터럴{}을 사용하여
 *    프로퍼티를 연결할 때에는
 *    constructor가 지워지는 것을 고려해야 합니다.
 *
 * 2. constructor가 없어도 인스턴스가 생성되지만
 *    contstructor가 연결된 것이 정상이므로
 *    코드처럼 constructor에 Book function을 할당합니다.
 */

// 코드 1 constructor 연결
function Book() {}
Book.prototype = {
  constructor: Book,
  setPoint: function () {},
};
let obj = new Book();
console.log(obj.constructor); // function Book(){}

// prototype 확장과 인스턴스 형태
// 코드 1 프로퍼티 확장과 인스턴스
function Book1(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point;
};
let obj1 = new Book(100);
obj1.getPoint();

/**
 * obj: {
 *  point: 100,
 *  __proto__ = {
 *    constructor: Book,
 *    getPoint: function(){}.
 *    __proto__: Object
 *  }
 * }
 */

/**
 * prototype을 확장하는 방법과 생성한 인스턴스 형태를 살펴보자
 *
 * ------
 * prototype 확장
 * ------
 *
 * 1. function Book(point){};
 *    Book 오브젝트 생성
 * 2. Book.prototype.getPoint = function(){}
 *    Book.prototype에 getPoint 메서드 연결
 * 3. let obj = new Book(100);
 *    인스턴스를 생성하여 obj에 할당
 * 4. obj.getPoint()
 *    obj 인스턴스의 getPoint() 호출
 * 5. 인스턴스를 생성하면
 *    prototype에 연결된 메서드를
 *    인스턴스.메서드이름() 형태로 호출
 */
