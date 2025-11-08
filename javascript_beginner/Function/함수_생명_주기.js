// 함수 생명 주기

// 함수 분류
/**
 * function 분류
 *    빌트인 Function 오브젝트
 *    function 오브젝트
 *    function 인스턴스(new 연산자 사용)
 * function 오브젝트 생성 방법
 *    function 키워드 사용
 *    function getBook(title) {return title}
 * JS엔진이 function 키워드를 만나면
 *    이름이 getBook인 function 오브젝트 생성
 */

// 함수 생명 주기
/**
 * 함수 호출
 *    getBook("JS북")
 *    함수를 호출하면서 파라미터 값을 넘겨 줌
 * 함수 코드 실행
 *    JS 엔진 컨트롤이 함수의 처음으로 이동
 *    파라미터 이름에 넘겨 받은 파라미터 값 매핑
 *    함수 코드 실행
 *    return 작성에 관계없이 반환 값을 갖고 함수를 호출한 곳으로 돌아 감
 */

// length 프로퍼티
/**
 * 함수의 파라미터 수가
 *    생성되는 function 오브젝트에 설정됨
 *    함수를 호출한 곳에서 보낸 파라미터 수가 아님
 * JS 엔진이 자동으로 설정
 */
