// Argument 오브젝트
/**
 * 함수가 호출되어 함수 안으로 이동했을 때 arguments 이름으로 생성되는 오브젝트
 * 함수를 호출한 곳에서 넘겨준 값을 순서대로 저장
 * 호출된 함수에 파라미터를 작성한 경우
 *    호출된 함수의 파라미터에도 값을 설정하고 Argument 오브젝트에도 저장한다.
 *    apply()와 Argument 오브젝트
 *
 * 파라미터라고 부른 것은 Argument 오브젝트와 구분하기 위한 것
 */

// 코드 1 모든 파라미터 값 저장
function getTotal(one) {
  return one + arguments[1] + arguments[2];
}

let result = getTotal(10, 20, 30);
console.log(result); // 60

// 코드 2 - apply()와 아규먼트 오브젝트
let resultApply = getTotal.apply(this, [10, 20, 30]);
console.log(result); // 60
