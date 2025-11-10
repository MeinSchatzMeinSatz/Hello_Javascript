// 엔진 해석 방법
// 엔진 해석 순서
/**
 * 자바스크립트는 스크립팅 언어
 *    스크립팅 언어는
 *    작성된 코드를 위에서부터 한 줄씩 해석(환경 설정)하고 실행
 *    하지만, 자바스크립트는 다르다.
 *
 * 중간에 있는 코드가 먼저 해석될 수도 있다.
 *
 * 첫번째, 함수 선언문을 순서대로 해석
 *    function sports(){}
 *
 * 두번째, 표현식을 순서대로 해석
 *    let value = 123
 *    let book = function(){}
 */

function book() {
  debugger;
  let title = "JS Book";
  function getBook() {
    return title;
  }
  let readBook = function () {};
  getBook();
}
book();
// undefined
// undefined
// fuction getBook() {}

// 함수 코드 해석 순서
/**
 * 1. 함수 선언문 해석
 *    function getBook(){}
 * => 후 스코프에 등록
 *
 * 2. 변수 초기화
 *    let title = undefined;
 *    let readBook = undefined;
 * => 변수 추출
 * => 변수는 선언만 하고 undefined로 초기화 한다.
 *
 * 3. 코드 실행
 *    let title = "JS Book";
 *    let readBook = function(){};
 *    getBook();
 *
 * 총 세 번 도는군...!
 */
