// 콜 스택
/**
 * call stack
 *    실행 컨텍스트의 논리적 구조
 *
 * First In Last Out 순서
 *    함수가 호출되면 스택의 가장 위에 실행 컨텍스트가 위치하게 된다.
 *    다시 함수 안에서 함수를 호출하면 호출된 함수의 컨텍스트가 가장 위에 놓이게 된다
 *    함수가 종료되면 스택에서 빠져 나온다(FILO 순서)
 *
 * 가장 아래는 글로벌 오브젝트의 함수가 위치한다.
 */

function one() {
  two();
  console.log(1);
}

function two() {
  three();
  console.log(2);
}

function three() {
  console.log(3);
}

one(); // 3 2 1

// 이런 논리가 성립하는 이유는, 자바스크립트가 싱글 스레드 이기 때문!
