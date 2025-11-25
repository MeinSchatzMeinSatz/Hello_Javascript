// 10진수를 2진수로 변환하기
function solution(N) {
  const stack = [];
  let q = N; // 몫을 나타내는 변수

  // 0인 경우 예외 처리
  if (q === 0) {
    return "0";
  }

  while (q > 0) {
    const r = q % 2;
    stack.push(String(r));
    q = Math.floor(q / 2);
  }

  return stack.reverse().join("");
}

console.log(solution(9));
