// Execution Context의 형태
// 실행 컨텍스트의 형태
/**
 * book() 함수가 호출되면
 *    show Function 오브젝트 생성
 *    show의 [[Scope]]에 스코프 생성
 * show() 함수가 호출되면 EC 생성
 *    함수 실행을 위한 Context 환경 구축
 *    LEC, VEC, TBC 생성 첨부
 *    LEC에 ER, OLER 첨부
 *    ER에 DER, OER 첨부
 * DER에 show()의 변수, 함수 기록
 * OLER에 show의 [[Scope]]를 설정
 * this 바인딩 컴포넌트에 this 참조 설정
 */

function book() {
  let point = 123;
  function show() {
    let title = "JS book";
    // getPoint();
    // this.bookAmount
  }
  function getPoint() {
    return point;
  }
  show();
}
book();

// JS의 정적 컨텍스트: 스택으로 처리되는군...!
// JS는 기본적으로 정적으로 스코프를 만들고, 환경을 만든다.
// 환경에는 스코프 개념과, 식별자 해결을 위한 처리가 들어있다.
