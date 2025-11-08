// 함수 형태
/**
 * 함수 선언문
 *    Function Declaration
 *    function getBook(parameter) {code}
 *
 * 함수 표현식
 *    Function Expression
 *    let getBook = function(parameter) {code}
 */

// 함수 선언문
/**
 * function: function 키워드
 * 식별자: 함수 이름
 * 파라미터: 파라미터 리스트opt
 * 함수 블록: (실행 가능한 코드 opt)
 * 반환: 생성한 function 오브젝트
 *
 * function name(parameter) {code}의 형태
 *    function 키워드, 함수 이름, 블록{} 작성은 필수
 *    파라미터, 함수 코드는 선택
 * 함수 이름을 생성한 function 오브젝트의 이름으로 사용
 */

// 함수 표현식
/**
 * function: function 키워드
 * 식별자: 함수 이름opt
 * 파라미터: 파라미터 리스트opt
 * 함수 블록: (실행 가능한 코드opt)
 * 반환: 생성한 function 오브젝트
 *
 * let functionID = function(parameter) {code}
 *    function 오브젝트를 생성하여 변수에 할당하는 방식
 *    변수 이름이 function 오브젝트 이름이 된다.
 * 식별자 위치의 함수 이름은 생략 가능
 *    변수 위치의 이름은 식별자
 *    함수 이름은 생략 가능
 *    이름을 붙여주더라도 함수 블록 안에서 호출하는 것만 가능
 */

// 왜 함수를 두가지 형태로 선언할까?
// 함수 선언문이 먼저 Function 객체를 만들고 함수 표현식으로 Function 객체를 만든다.
// 순서가 다르므로, 동반되는 처리도 다를 것...!
