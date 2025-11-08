// 함수 호출

// call()
/**
 * object: 호출할 함수 이름
 * 파라미터: this로 참조할 오브젝트
 *        호출된 함수로 넘겨줄 파라미터 opt
 * 반환: 호출된 함수에서 반환한 값
 */

// getTotal.call(this, 10, 20)
// 코드 1
function getTotal(one, two) {
  return one + two;
}

let result = getTotal.call(this, 10, 20);
console.log(result); // 30

/** 첫번째 파라미터
 *    호출된 함수에서 this로 참조할 오브젝트
 *    일반적으로 this 사용
 *    다른 오브젝트 작성 가능
 */
// 코드 2 - 첫번째 파라미터
let value = { one: 10, two: 20 };
function getSum() {
  return this.one + this.two;
}
let result1 = getSum.call(value);
console.log(result1);

// apply()
/**
 * object: 호출할 함수 이름
 * 파라미터: this로 참조할 오브젝트 / (호출된 함수로 넘겨줄 파라미터opt)
 * 반환: 호출된 함수에서 반환한 값
 */

// getTotal.apply(this, [10, 20]);
// 파라미터 수가 유동적일 때 사용, ⭐️두 번째 파라미터에 배열 사용 -> ❗️두 번째 파라미터가 유동적인 경우 사용하기 좋다.
let resultApply = getTotal.apply(this, [10, 20]);
console.log(resultApply);

/**
 * call(), apply() 부가적인 목적?
 *
 * 첫 번째 파라미터에 호출된 함수에서 this로 참조할 오브젝트 사용
 * 논리 전개는 단계적 설명이 필요하므로 중고급 강좌에서 다룹니다.
 */

// function Object의 toString()
// 함수 코드를 문자열로 반환
let toStringFunc = function () {
  return 100 + 200;
};

let resultToString = toStringFunc.toString();
console.log(resultToString);
//function () {return 100 + 200;}
